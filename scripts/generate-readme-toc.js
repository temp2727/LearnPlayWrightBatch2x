const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const README_PATH = path.join(ROOT_DIR, 'README.md');

const EXCLUDED_DIRS = new Set(['.git', 'node_modules', '.github']);
const EXCLUDED_FILES = new Set(['README.md', '.gitignore']);

const CHAPTER_DESCRIPTIONS = {
  'chapter_01_Basics': 'Environment setup verification and basic JS execution',
  'chapter_02_JavaScript': 'Core JavaScript concepts',
  'chapter_03_Identifier_Literals': 'Naming rules, comments, and editor shortcuts',
  'chapter_04_Javascript_Concepts': 'Variables, functions, scope, and hoisting',
  'chapter_05_Literals': 'Data types, strings, template literals, null and undefined',
  'chapter_06_Operators': 'Arithmetic, comparison, logical, ternary, and type operators',
  'chapter_07_If_Else_Stmt': 'Conditional statements with if, else if, and else',
  'chapter_08_Switch_Stmt': 'Switch statements, case grouping, and default handling',
  'chapter_09_userInput': 'User input handling with readline and prompt-sync',
};

function getDirectoryTree(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const dirs = entries.filter(e => e.isDirectory() && !EXCLUDED_DIRS.has(e.name)).sort((a, b) => a.name.localeCompare(b.name));
  const files = entries.filter(e => e.isFile() && !EXCLUDED_FILES.has(e.name)).sort((a, b) => a.name.localeCompare(b.name));

  let lines = [];

  dirs.forEach((d, i) => {
    const isLastDir = i === dirs.length - 1 && files.length === 0;
    const branch = isLastDir ? '└── ' : '├── ';
    lines.push(`${prefix}${branch}${d.name}/`);

    const nextPrefix = isLastDir ? `${prefix}    ` : `${prefix}│   `;
    const subLines = getDirectoryTree(path.join(dir, d.name), nextPrefix);
    lines.push(...subLines);
  });

  files.forEach((f, i) => {
    const isLast = i === files.length - 1;
    const branch = isLast ? '└── ' : '├── ';
    lines.push(`${prefix}${branch}${f.name}`);
  });

  return lines;
}

function generateRepoStructure() {
  const rootName = path.basename(ROOT_DIR);
  const treeLines = getDirectoryTree(ROOT_DIR);
  return [`${rootName}/`, ...treeLines].join('\n');
}

function generateChaptersOverview() {
  const entries = fs.readdirSync(ROOT_DIR, { withFileTypes: true });
  const chapterDirs = entries
    .filter(e => e.isDirectory() && e.name.startsWith('chapter_'))
    .sort((a, b) => a.name.localeCompare(b.name));

  let lines = [
    '| Chapter | Topic | Description |',
    '|---------|-------|-------------|'
  ];

  chapterDirs.forEach(dir => {
    const match = dir.name.match(/^chapter_(\d+)_(.+)$/);
    if (match) {
      const number = match[1];
      const topic = match[2].replace(/_/g, ' ');
      const description = CHAPTER_DESCRIPTIONS[dir.name] || '';
      lines.push(`| **Chapter ${number}** | ${topic} | ${description} |`);
    }
  });

  return lines.join('\n');
}

function updateReadme() {
  if (!fs.existsSync(README_PATH)) {
    console.error('README.md not found at', README_PATH);
    process.exit(1);
  }

  let readme = fs.readFileSync(README_PATH, 'utf-8');
  const structure = generateRepoStructure();
  const chaptersOverview = generateChaptersOverview();

  // Match the ## 📁 Repository Structure section and its code block
  const sectionRegex = /(## 📁 Repository Structure\s*\n\s*```\n)[\s\S]*?(\n```)/;

  if (sectionRegex.test(readme)) {
    readme = readme.replace(sectionRegex, `$1${structure}$2`);
  } else {
    console.warn('Could not find "## 📁 Repository Structure" section with code block in README.md');
    process.exit(1);
  }

  // Match the ## 📚 Chapters Overview section and its markdown table
  const chaptersRegex = /(## 📚 Chapters Overview\s*\n\n)[\s\S]*?(\n## |\n## 🛠️ What's Next|$)/;

  if (chaptersRegex.test(readme)) {
    readme = readme.replace(chaptersRegex, `$1${chaptersOverview}\n\n$2`);
  } else {
    console.warn('Could not find "## 📚 Chapters Overview" section in README.md');
    process.exit(1);
  }

  fs.writeFileSync(README_PATH, readme, 'utf-8');
  console.log('README.md updated successfully.');
}

updateReadme();
