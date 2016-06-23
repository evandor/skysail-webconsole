echo "Bundle: $1"
VERSION="grep Bundle-Version: $1/bnd.bnd | sed 's/Bundle-Version://' | sed 's/.${tstamp}//' | sed -e 's/^[[:space:]]*//'"
echo "Version: $VERSION"

git add -A
git commit -m "new Release ${BUNDLE}-$VERSION"

cp cnf/release/$1/$1-$VERSION.jar /home/carsten/tmp/bundles4release