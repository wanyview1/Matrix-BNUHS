import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// 获取当前目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectDir = path.join(__dirname, '..');

// 检查是否已经初始化git
function checkGitStatus() {
  try {
    const gitStatus = execSync('git status --porcelain', { cwd: projectDir, encoding: 'utf-8' });
    return gitStatus.trim();
  } catch (error) {
    console.log('初始化 Git 仓库...');
    execSync('git init', { cwd: projectDir });
    execSync('git add .', { cwd: projectDir });
    return 'new';
  }
}

// 检查远程仓库是否存在
function checkRemote() {
  try {
    const remote = execSync('git remote -v', { cwd: projectDir, encoding: 'utf-8' });
    return remote.includes('Matrix-BNUHS');
  } catch (error) {
    return false;
  }
}

// 添加远程仓库
function addRemote() {
  console.log('请先在GitHub上创建名为 Matrix-BNUHS-v2 的仓库');
  console.log('访问 https://github.com/new 创建新仓库');
  console.log('创建后请运行以下命令:');
  console.log(`git remote add origin https://github.com/wanyview/Matrix-BNUHS-v2.git`);
  console.log('然后运行: git push -u origin main');
  
  // 暂时只初始化本地git仓库
  try {
    execSync('git init', { cwd: projectDir });
    execSync('git add .', { cwd: projectDir });
    execSync('git config user.name "wanyview"', { cwd: projectDir });
    execSync('git config user.email "wanyview@example.com"', { cwd: projectDir });
    execSync('git commit -m "feat: 发布 Matrix-BNUHS v2"', { cwd: projectDir });
    execSync('git branch -M main', { cwd: projectDir });
    console.log('✅ 本地仓库已创建并提交');
    console.log('请按上述说明创建GitHub远程仓库并连接');
  } catch (error) {
    if (error.message.includes('nothing to commit')) {
      console.log('✅ 本地仓库已准备就绪');
      console.log('请按上述说明创建GitHub远程仓库并连接');
    } else {
      throw error;
    }
  }
}

// 提交并推送
function commitAndPush() {
  try {
    // 配置git用户
    execSync('git config user.name "wanyview"', { cwd: projectDir });
    execSync('git config user.email "wanyview@example.com"', { cwd: projectDir });
    
    // 添加所有文件
    execSync('git add .', { cwd: projectDir });
    
    // 检查是否有更改
    const diff = execSync('git diff --cached --name-only', { cwd: projectDir, encoding: 'utf-8' });
    if (!diff.trim()) {
      console.log('没有文件需要提交');
      return;
    }
    
    // 提交
    execSync('git commit -m "feat: 发布 Matrix-BNUHS v2"', { cwd: projectDir });
    
    // 创建并切换到main分支
    execSync('git branch -M main', { cwd: projectDir });
    
    // 推送到远程仓库
    execSync('git push -u origin main', { cwd: projectDir });
    
    console.log('✅ 项目已成功发布到 GitHub: https://github.com/wanyview/Matrix-BNUHS-v2');
  } catch (error) {
    console.error('❌ 发布过程中出现错误:', error.message);
    throw error;
  }
}

// 主函数
function publish() {
  console.log('🚀 开始发布 Matrix-BNUHS 到 GitHub...');
  
  // 检查git状态
  const uncommittedChanges = checkGitStatus();
  
  // 检查远程仓库
  if (!checkRemote()) {
    addRemote();
  }
  
  // 提交并推送
  commitAndPush();
  
  console.log('🎉 发布完成!');
}

publish();