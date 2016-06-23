echo "Running pre_release script"
echo "=========================="
echo ""
echo "BUNDLE: $1"
VERSION=`grep Bundle-Version: $1/bnd.bnd | sed 's/Bundle-Version://' | sed 's/\.\${tstamp}//' | sed -e 's/^[[:space:]]*//'`
echo "Version: $VERSION"
echo "VERSION=$VERSION" > /home/carsten/.hudson/envVars.properties
