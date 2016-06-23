echo "Bundle: $BUNDLE ${BUNDLE}"
VERSION="grep Bundle-Version: ${BUNDLE}/bnd.bnd | sed 's/Bundle-Version://' | sed 's/.${tstamp}//' | sed -e 's/^[[:space:]]*//'"
echo "Version: $VERSION"

git add -A
git commit -m "new Release ${BUNDLE}-$VERSION"

cp cnf/release/${BUNDLE}/${BUNDLE}-$VERSION.jar /home/carsten/tmp/bundles4release