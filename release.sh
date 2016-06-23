echo "Running release script"
echo "=========================="
echo ""
echo "BUNDLE: $1"
echo "VERSION: $2"

git add -A
git commit -m "new Release $1-$2"

echo "cp cnf/release/$1/$1-$2.jar /home/carsten/tmp/bundles4release"
cp cnf/release/$1/$1-$2.jar /home/carsten/tmp/bundles4release
