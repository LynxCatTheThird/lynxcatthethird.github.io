cd /home/lynx/Program/web-v3/source/
mv /home/lynx/Program/web-v3/source/_cached_git_source /home/lynx/Program/web-v3/source/.git
mv /home/lynx/Program/web-v3/.git /home/lynx/Program/web-v3/_cached_git_parent
git add .
git commit -m "Sources updated: $(date '+%Y-%m-%d %H:%M:%S')"
git push
mv /home/lynx/Program/web-v3/source/.git /home/lynx/Program/web-v3/source/_cached_git_source
mv /home/lynx/Program/web-v3/_cached_git_parent /home/lynx/Program/web-v3/.git