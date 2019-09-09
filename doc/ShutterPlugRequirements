# ShutterPlug - Requirements Specification
---
#
##### **Navigate to Section**
###### **[Functional Requirements](#Functional)**
###### **[Non-Functional Requirements](#Non-functional)**
###### **[Domain Constraints](#Constraints)**
#
#
### Functional
---
##### **Home Page**
* **Priority: High**
* **Justification:** All users will need a centralized location from which to navigate the application; this will act as an intuitive point from which they can easily navigate to the other sections
* Navigation options at top (formatted for platform)
* “Search for an Artist” section
* “The Plug” section (scrollable news feed)
##### **Navigation bar** 
* **Priority: High**
* **Justification:** Navigation bar will allow users to logically switch between different pages in the web application
##### **“Search for an Artist” link** 
* **Priority: High**
* **Justification:** Users will be able to customize the search parameters to find targeted and relevant results for the type of services they are looking for
##### **About Us link** 
* **Priority: Low**
* **Justification:** Provides information about the company and the development team
##### **Contact Us link**
* **Priority: Low**
* **Justification:** Allows users to interface with the company and ask questions, make inquiries, and otherwise communicate with Shutter Plug
##### **Create/Log-In/View Profile** 
* **Priority: High**
* **Justification:** Users will need segmented roles in order to only be able to perform the actions that they’re allowed to.  For example, an artist should not be able to manage the news feed, a client user should not be able to approve / deny profiles, etc.
##### **Create User Types:**
* **Priority: High**
* **Justification:** Delegating user permissions will be vital to ensure that users are unable to perform non-authorized functions
* ##### **Admin**
    * **Priority: High**
    * Can create Employee users
    * **Justification:** Administrators can create other users and can also perform the administrative functions of employees
    * Can approve / deny an artist’s profile
    * **Justification:** Admin can perform this Employee function
    * Can update / add to a scrollable news feed
    * **Justification:** Admin can perform this Employee function
* ##### **Employee**
    * **Priority: High**
    * **Justification:** Employees will have to manage approved artists / reviews and also manage content in the scrollable news feed
    * Can approve / deny an artist’s profile
    * **Justification:** Need to filter through spam / inappropriate profiles
    * Can approve / deny a client’s review
    * **Justification:** Need to filter through spam / inappropriate profiles
    * Can update / add to a scrollable news feed
    * **Justification:** Employee role involves managing this feed
* ##### **Artist (Photographer/Videographer)**
    * **Priority: High**
    * **Justification:** Artists will use this platform to self-promote, using the profile parts listed below. Users will need to see samples of the artists’ work and can base their decisions on this, among other criteria
    * Can create a profile featuring samples of their photography
    * Will choose a profile pic
    * Will upload no more than 3 photos to showcase portfolio
    * Add social network links
    * Will add criteria that will be searchable:
        * Location/Radius
        * Availability - lower priority - look into Calendar APIs
        * Price Range
        * Experience
        * Certifications
        * Specializations
 * ##### **Client**
    * **Priority: High**
    * Can leave reviews / rate an artist’s profile
    * **Justification:** Future users can gauge the quality (professionalism / quality) of an artist, partially basing this on the unbiased reviews of others
    * Can search for artists using filters
    * **Justification:** Users should not have to endlessly scroll through a list of unfiltered search results to find what they are looking for
    * Can save artists into a “Favorites” list
    * **Justification:** Users should not have to search multiple times to locate an artist that they are interested in
* ##### **Business**
    * **Priority: Medium**
    * Created by Employee
    * Business will submit a link and photo for promotion

##### **Log In:**
* **Priority: High**
* Email address - input field
* Password - input field
* Additional security and authentication considerations will be needed
* View Profile:


##### **“Search for an Artist”**
* **Priority: High**
* **Justification:** It will be imperative for users to be able to filter search results and to locate an artist with the qualities that they are looking for.
* **Search:**
    * Default view is no artists showing, requiring user to make an initial search to see artists
    * **Form layout** - will need to be displayed on both Home page and dedication Search page
       * **Artist Name** - input field
        * **Location** - zip code - input field
      * **Range** - mile increments - drop down
      * **Experience** - input field
       * **Certification** - drop down - multi selection
        * **Specializations** - drop down - multi selection
    * **Submit button**
* **Results:**
    * Display artist results in vertical alignment (Bootstrap card?)
##### **“The Plug” - Scrollable news feed**
* **Priority: Medium**
* Looks similar to Instagram
* Featured photographers, top-liked photographer
* Ads
* Product Reviews
* Event Promos
* Studio rentals
* Drones and lightroom and photoshop tests
* Studio rentals in town
##### **Admin Portal button for Admins only**
* **Priority: High**
* Ability to create, add and edit any type of user
* Ability to approve new Artists
##### **Employee Portal button for Employees only**
* **Priority: High**
* Ability to create, add and edit Artist, Client and Business user
* Ability to approve new Artists
##### **MongoDB database storing user information, saved artists, roles, etc.**
* **Priority: Super High**
#
#
#
### **Non-functional**
---
##### **Built using the MERN stack**
* **Justification:** The MERN stack is an effective, highly-scalable, and popular framework for developing full stack applications.  There is a large amount of documentation available which will help reduce the development time needed.
* ##### **MongoDB for database (No-SQL)**
* ##### **Express for NodeJS framework**
* ##### **React for client side development**
* ##### **Bootstrap for CSS framework**
* ##### **NodeJS for server side development**
##### **Similar functionality on both iPhone / Android / computer / tablet**
* **Justification:** Users will use multiple platforms and one user may use multiple platforms - app needs to be consistent between them
##### **Available 24/7 - find domain hosting solution**
* **Justification:** App needs to be available constantly
##### **Responsive and intuitive across web application and mobile platforms**
* **Justification:** Favorable user experience is key to attracting and retaining solid user base
#
#
#
## **Constraints**
---
##### **Users will not use the application to exchange money**
* **Justification:** Client does not want to handle the exchange of money (liability / complication issues)
##### **Users will not use the application to host large amounts of photos / videos**
* **Justification:** Client does not want this to be a hosting platform, but simply a way for artists to self-advertise
##### **Artists’ portfolios will be hosted elsewhere, this application will simply link users to those portfolios in a centralized space)**
* **Justification:** See above
