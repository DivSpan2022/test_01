// cleat 清空
// ?? 表示当前文件未被追踪的意思
//  git status  查看当前文件状态 -s精简
//  git add 要追踪的文件
// A 表示已追踪
// M表示已修改
// git commit -m '描述'
// add: 可以添加新文件   提交修改后的文件  合并多人代码

// git checkout 撤销修改
// git add .  一次性添加多个文件
// git reset HEAD 要移除的文件名称:  移除暂存的文件
// git reset HEAD .  移除暂存的文件
// git commit -a -m  跳过暂存区
// git rm -f 要移除的文件名称 //仓库和工作区同时移除
//git rm --cached //仓库的文件移除,保留工作区文件

// 忽略文件
//   *.a
//   !lib.a
//    / TODO
//   build /
//   doc/*.txt
//   doc/**/*.pdf

//提交历史  git log
// 一行显示 --pretty=oneline
//git log --pretty=format:"%h|%an|%ar|%s"
// %h 提交简写哈希值
// %an 作者名称
// %ar  作者修订日志
// %s提交说明


// git reset --hard 根据对应ID回退指定版本
// git reflog 原先所有的提交历史记录


//github 全球最大的开源项目托管平台
//gitlab 公司有的多
//gitee 国内平台 访问速度快


// git remote -v 查看关联的地址

// git remote add origin https://github.com/DivSpan2022/peoject_01.git 关联本地和远程仓库
//add  添加
//
//远程仓库地址 https://github.com/DivSpan2022/peoject_01.git
//git push -u origin main 第一次从本地仓库提交的时候 必须这么写
// git push
// -u 第一次推送是时 必须加这个参数
//origin 要推送的地址

// git clone 地址:  从远程仓库下载到本地

//git branch 查看分支列表
//git branch 新分支名称: 创建新分支
//git checkout 分支名称: 切换分支
//git checkout -b 分支名称 :  速创建和切换

// git checkout main  //先回到主分支
// git merge login    //合并分支
// git branch -d 名称: 删除该分支