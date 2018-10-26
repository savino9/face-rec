# **Virtual DNA** Application
__Discover more about your culture, history and identity.__

## Project Specifications

This Web Application is build with React and NodeJS using the clarifai API.
Virtual DNA allows registered users to upload a picture from a url, the application 
will connect to the clarifai API to retrieve the data prediction.


## Table of Contents

- [What is the problem to solve?](#problem-to-solve)
- [Target Audience](#target-audience)
- [Folder Structure](#folder-structure)

## Problem to solve
The only way to discover more about your ethnic origin is to buy a DNA-kit test, witch is most of the time quite expansive. After you buy the kit you will wait for it, usually you have to wait a lot of time also for the results. 

* DNA test kit are too expansive
* Too much time to wait before getting the results

## Target Audience

Primary target will be young professionals that wants to learn more about themselves, generally man and woman from 25 years old to 35. 

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.










__- What is the problem you are trying to solve?__
__- Who is your target audience?__
__- What are your specific goals?__

The tourism industry is booming, especially in Amsterdam; according to
(https://amsterdam.org/en/facts-and-figures.php) there are 5340000 tourists every year, which on average works out to around 14630 people every day.

This city has a lot of amenities to offer; according to the same source, there are 1150 Restaurants and 1515 Bars and cafes in Amsterdam. This is an overwhelming number, and it can be intimidating trying to make a decision about where to go and how to get the best value for your money.

Many of the people who visit Amsterdam will include people on holiday,
inter-railers, back packers and couch surfers, and are likely to be on a budget
but also want to enjoy themselves. For many of these people coming to Amsterdam
for the first time, it is possible that they are not familiar with the area and
they are trying to save money on food or drinks.

**This is why you should use DONE DEAL**

We are going to build a web application to make it very easily to find offers
(for example Happy Hours) at different times of day on different days of the
week. For example, a user might know that they want to go out between 19:00
and 20:00 on a Thursday evening, but are not sure where they want to go. The
user can then use **DONE DEAL** to search this block of time and our website will
return the results to the user, making it easy for them to decide where they
would like to go.

This web application is not just limited to first time visitors, in fact it can
be used by anyone. Even ex-pats and locals who will be more familiar with the
city may wish to visit new bars and restaurants and can use our application to
do so. As far as we are aware, there is nowhere that comprehensively complies
information on happy hours, special offers and discounts at certain times on
certain dates. Our web application seeks to compile that information and make
it easily accessible to everyone, free of charge.

__What is your business model? Where is your revenue coming from?__

Our business model will operate under the principle of being completely free
for people to use the search functionality. Anyone can go onto the website and
select a block of time and a date and the results will be returned to them. The
site will be completely free of charge for users, and we will not ask for any
kind of payment to use the site like this. Furthermore, we will also compile
information on all bars and restaurants in Amsterdam, free of charge. We realize
that this will be an incredibly large undertaking, and would start with a small
sample area, in order to determine how long it takes to gather this information
and to better determine how long it would take to do this for businesses city
wide.

If a bar or restaurant is interested then we will offer the first month of
being part of our service completely for free. This month will allow the
business to add information on their offers (making it easier for us to compile
the data). We want to convince businesses that our idea is so strong and will
generate them more revenue and get them more customers, that if they are willing
to pay for the monthly plan or yearly plan, that in return this will generate
even more business and customers for them.

We will offer two options to businesses, either a monthly subscription for
€9.99 or a yearly subscription for €99.99

The €9.99 subscription and the €99.99 subscription offer the same functionality, with the €99.99 offering a saving to the business.

__What are the costs of your business?__

Here is a breakdown of the team that we would need to eventually hire to make
this business work:

#### Heroku

- The only main service cost is the hosting that will ensure that the application it's 24h working everyday. 

__- Who is your current competition?__
__- How is your product different from currently available competitors?__
__- What is the current supply / demand for your product?__

A similar idea was attempted by a company called Bar Doggy, which failed due to
the company trying to upscale too quickly. See this link for full details:
https://www.sprout.nl/artikel/startups/tim-de-kraker-bardoggy-ik-heb-klassieke-ondernemersfouten-gemaakt

At the moment there is no comprehensive list of bars and restaurants with all
of their offers. We believe that by keeping our idea focused this will help to
ensure success, and it will be important to not try to advance too quickly.
We should set realistic goals and try to stick to them.

As previously discussed, there is an incredibly large potential customer base
of users and businesses, and after conducting more thorough market research, we
can try to better determine the demand for the product.

## Technical Specifications:

- __What data will you need to store? How will it be organized? Describe each
table, its columns, and its relationships with other tables.__

- **Data organization**

```
     Table 'Users'
```

This will be a list of all of the users stored in the database.

The columns will be:
- UserId (each user will be assigned a unique Id with a serial primary key)
- Name (name of the user)
- Email (email of the user)
- Password (password of the user)

|   UserId   |        Name       |          Email              |      Score     |
|------------|:-----------------:|----------------------------:|:--------------:|
|     1      |           Luca    |            luca@gmail.com   |         4      |
|     2      |       Stephany    |          steph@mgmail.com   |        10      |
|     3      |           Trin    |          trin@hotmail.com   |         8      |



- __What does your product look like? List each view, their purpose, and how they work__

When a user will submit the url of the image 

The information on each user will include the NAME and SCORE. After the user has submitted the url 
the face will be detected and more information will be displayed such as 

Virtual DNA will be highly accessible and incredibly user friendly, the
website will have the following routes:

## **ROUTES**

### Homepage('/')
This will be the first page the user sees.

### Sign In('/signin')
This page allows users to sign in their own account.

### Register('/register')
This page allows a user to register an account. (Ideally one account for one user);

### Update Score('/image')
This route will update the rank of the user +1 after the image will be analized.

## Milestones, Timeline 

- The application it's almost complete. Most of the front end is't set up and 
working, it's connected already with the server.

#### Friday 26th

- Implementing Postgres database 
- Creating the table Users
- Changing background and text color 

#### Saturday 27th

- Connecting the database with the front-end
- Register a user
- Getting User profile 

### Sunday 28th 

- Update entries 
- Test sign in 
- Test Application
- Deploy with Heroku 

