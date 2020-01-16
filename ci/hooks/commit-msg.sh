commit_regex='(\[B2BSY-[0-9]+\]\[B2BSY-[0-9]+\]|merge)'
error_msg="ERROR! Commit message should follow the pattern [B2BSY-1234][B2BSY-7890], where 1234 is the code of the story and 7890 is the code of the task."

if ! grep -iqE "$commit_regex" "$1"; then
    echo "$error_msg" >&2
    exit 1
fi

exit 0