# Get Outside RVA

![Get Outside RVA Logo]('/client/src/images/logo.PNG)

View the site live now! http://www.getoutsiderva.herokuapps.com Future enhancements will be live on http://www.getoutsiderva.com.

## Summary

Get Outside RVA is a full-stack web application utilizing the MERN stack of MongoDB, Express, React and Node. Get Outside RVA is a movement focused on getting RVA and visitors OUTSIDE. The river city is full of outdoor opportunities and we want to connect everyone to these opportunities. 

## MongoDB

MongoDB was selected as the database of choice because of its superb scalability. As GetOutsideRVA.com becomes a social networking and crowd sourced site in the future, this scalability will be critical to the success of the site.

During development, the dynamic storage and seeding ability of the database was extremely helpful. Data was simply input using JSON and no join tables were required to create the relationship between the data collections.

insert image here

## Additional Technologies Used

1. Reactstrap
1. Material Design Bootstrap(MDB) React
1. React Lazy Hero (NPM)
1. Video React

## Future Enhancements

1. Scalability - The biggest effort for the site is to make it scalable as the future goal is to build a crowd sourced platform for users to share, comment, review parks and activities. One such component of this is the ability to add a park or activity if they do not see it listed. This would require a minor review process after submission, but the user would own that input for the most part. Checks and validations would be in place to allow certain reviews. 
1. Authentication - The user will only be able to post reviews and add parks or activities if they are logged in. This will encourage participation and ownership of the Get Outside RVA name/brand. Further work needs to be done on authentication.
1. Imagery - Higher quality and owned imagery will be added to the site in the future to improve the user experience. Users will be encouraged to provide their images as they review parks and activities.
1. Filtering/Search - A simple search on the `/home` page and in the `navbar` will be added for keyword searching. The search page (`/advanced-search`) will be functional. On landing page (`/activities` & `/parks`) filtering will be added. These enhancements will help the user quickly get to the information they need no matter where they are.