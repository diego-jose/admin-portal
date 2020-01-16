cp ci/hooks/commit-msg.sh .git/hooks/commit-msg
cp ci/hooks/pre-push.sh .git/hooks/pre-push

rm -f .git/hooks/commit-msg.sample
rm -f .git/hooks/pre-push.sample

chmod +x .git/hooks/commit-msg
chmod +x .git/hooks/pre-push