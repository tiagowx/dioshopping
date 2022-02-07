DIR="./node_modules"
if [! -d "$DIR" ]; then
  # Take action if $DIR exists. #
  echo "Installing dependencies..."
  npm install
fi
echo "Starting server"
npm start