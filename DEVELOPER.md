# For Developers
## Starting the App
1. Run "npm install" to download the necessary packages
2. Follow the README that is provided within the commercial-marketplace folder

## Pages
There are two primary pages currently:
1. Home Page
    * Contains search bar, navigation menu, product filters.
    * Links to solution page and Loss Control Services page
2. Solutions Page
    * Contains scrollable grid with cards of all vendors provided by NW
    * Contains navbar
## App Components
Currently there are 5 main components:
1. The Header
    * This contains the Loss Control Services component
2. The LCS Button
    *  This component links to the respective page mylosscontrolservices.com
3. The NavBar
    * This has all the other respective pages and logo that is needed
4. Searchbar
    * This is a textfield that will be submitted by the user to get relevant results
5. The Vendor Grid
    * This is a MUI Grid containing cards the hold all the necessary cendor info
6. Vendor Card
    * A MUI card that hold the link, description, and image of a vendor from provided json

These components have their respective styling files to help style the components.
The app is split into the pages and components. Every page has its set of components that are used, and styling sheets. Components also have their own css files.