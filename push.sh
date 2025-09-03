cd /home/lynx/Program/web-v3/source/
mv /home/lynx/Program/web-v3/source/_cached_git_source /home/lynx/Program/web-v3/source/.git
mv /home/lynx/Program/web-v3/.git /home/lynx/Program/web-v3/_cached_git_parent
git add .
# 获取修改的文件名并按行分开
modified_files=$(git status --porcelain | awk '{print $2}' | tr '\n' '\n')
# 使用 echo 来确保多行提交信息
commit_msg="Sources updated: $(date '+%Y-%m-%d %H:%M:%S')\nModified files:\n$modified_files"
# 提交并推送
git commit -m "$(echo -e "$commit_msg")"
git push
mv /home/lynx/Program/web-v3/source/.git /home/lynx/Program/web-v3/source/_cached_git_source
mv /home/lynx/Program/web-v3/_cached_git_parent /home/lynx/Program/web-v3/.git
