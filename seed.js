/* eslint-disable no-console */
const { green, red } = require('chalk');
const { db, User, Events } = require('./server/db/index.js');

// dummy users
const users = [{
  first_name: 'Rosmunda', last_name: 'Shallo', gender: 'Female', date_of_birth: '09/27/1974', phone: '814-945-7229', email: 'rshallo0@elpais.com', password: 'F2FyVTnjSl',
},
{
  first_name: 'Olly', last_name: 'Dufour', gender: 'Male', date_of_birth: '12/23/2001', phone: '443-592-6197', email: 'ooo@ooo.com', password: '123', 
},
{
  first_name: 'Tracee', last_name: 'Mattsson', gender: 'Female', date_of_birth: '11/10/1980', phone: '650-822-0995', email: 'tmattsson2@salon.com', password: 'PkR7NvA',
},
{
  first_name: 'Blair', last_name: 'Cordingly', gender: 'Female', date_of_birth: '03/23/1991', phone: '543-637-8643', email: 'bcordingly3@instagram.com', password: '8L6qab',
},
{
  first_name: 'Bethina', last_name: 'Penella', gender: 'Female', date_of_birth: '08/08/1977', phone: '748-233-2263', email: 'bpenella4@usda.gov', password: 'QOzFoa4i',
},
{
  first_name: 'Sadella', last_name: 'Farmery', gender: 'Female', date_of_birth: '06/30/1981', phone: '359-818-3576', email: 'sfarmery5@stumbleupon.com', password: '7F4wU9JuEfe',
},
{
  first_name: 'Christos', last_name: 'Musson', gender: 'Male', date_of_birth: '10/31/1971', phone: '791-444-9786', email: 'cmusson6@facebook.com', password: 'Pxo013Dinb',
},
{
  first_name: 'Wilden', last_name: 'Crossfeld', gender: 'Male', date_of_birth: '10/12/1993', phone: '803-102-6204', email: 'wcrossfeld7@nps.gov', password: 'xS27yn',
},
{
  first_name: 'Abbey', last_name: 'Ethelstone', gender: 'Male', date_of_birth: '10/21/1980', phone: '105-646-4518', email: 'aethelstone8@europa.eu', password: '0TXdOtJ',
},
{
  first_name: 'Roscoe', last_name: 'Reynoollds', gender: 'Male', date_of_birth: '03/26/1973', phone: '948-109-6844', email: 'rreynoollds9@dedecms.com', password: 'abBz2TVc',
},
{
  first_name: 'Daria', last_name: 'Gallier', gender: 'Female', date_of_birth: '12/03/1976', phone: '220-425-3855', email: 'dgalliera@cisco.com', password: 'bEZPWXpVr9F6',
},
{
  first_name: 'Alric', last_name: 'Mallaby', gender: 'Male', date_of_birth: '08/17/1995', phone: '116-646-8872', email: 'amallabyb@nasa.gov', password: 'd3oKQe3egDKA',
},
{
  first_name: 'Antoni', last_name: 'Iles', gender: 'Male', date_of_birth: '09/02/1999', phone: '629-423-4260', email: 'ailesc@a8.net', password: 'N3Pgs4Yw',
},
{
  first_name: 'Vin', last_name: 'Garratty', gender: 'Female', date_of_birth: '06/18/1993', phone: '404-195-1038', email: 'vgarrattyd@is.gd', password: 'vDeJZDrS',
},
{
  first_name: 'Annetta', last_name: 'McVity', gender: 'Female', date_of_birth: '01/03/1980', phone: '290-481-5387', email: 'amcvitye@java.com', password: 'WXIXDWiM7',
},
{
  first_name: 'Ram', last_name: 'Cochet', gender: 'Male', date_of_birth: '08/29/1981', phone: '547-539-4480', email: 'rcochetf@harvard.edu', password: 'bQtXtnxbEIk',
},
{
  first_name: 'Park', last_name: 'Miche', gender: 'Male', date_of_birth: '09/18/1995', phone: '530-882-1763', email: 'pmicheg@simplemachines.org', password: 'ykg2AX',
},
{
  first_name: 'Karalynn', last_name: 'Corradini', gender: 'Female', date_of_birth: '03/30/1972', phone: '482-803-6021', email: 'kcorradinih@about.com', password: 'QNLEXoub',
},
{
  first_name: 'Odessa', last_name: 'Bonhomme', gender: 'Female', date_of_birth: '01/29/1971', phone: '209-318-8421', email: 'obonhommei@prweb.com', password: 'vRF3X7',
},
{
  first_name: 'Sully', last_name: 'Klees', gender: 'Male', date_of_birth: '01/01/2001', phone: '539-159-4350', email: 'skleesj@ustream.tv', password: 'raXzKPo',
},
// {
//   first_name: 'Vincents', last_name: 'MacGauhy', gender: 'Male', date_of_birth: '12/23/1972', phone: '489-119-5726', email: 'vmacgauhyk@acquirethisname.com', password: 'fq8woCKDS4U3',
// },
// {
//   first_name: 'El', last_name: 'Slateford', gender: 'Male', date_of_birth: '09/20/1977', phone: '568-968-1732', email: 'eslatefordl@washingtonpost.com', password: 'YFtxB7Vddi3',
// },
// {
//   first_name: 'Tilda', last_name: 'Dudlestone', gender: 'Female', date_of_birth: '01/11/1972', phone: '347-251-3515', email: 'tdudlestonem@slashdot.org', password: 'T9UB1Pytli',
// },
// {
//   first_name: 'Haily', last_name: 'Banbrick', gender: 'Male', date_of_birth: '07/29/1983', phone: '678-840-8586', email: 'hbanbrickn@posterous.com', password: 'L8ykUnRpgYtR',
// },
// {
//   first_name: 'Olga', last_name: 'Battle', gender: 'Female', date_of_birth: '08/28/1985', phone: '457-576-6711', email: 'obattleo@mediafire.com', password: 'vt9FTp2lo',
// },
// {
//   first_name: 'Aurea', last_name: 'Worlidge', gender: 'Female', date_of_birth: '05/14/1991', phone: '505-370-0618', email: 'aworlidgep@shareasale.com', password: 'qegjCfFLvlJS',
// },
// {
//   first_name: 'Lindsay', last_name: 'McCrie', gender: 'Male', date_of_birth: '07/19/1979', phone: '565-980-9871', email: 'lmccrieq@canalblog.com', password: 'iaNKP5FGbJW',
// },
// {
//   first_name: 'Lindsay', last_name: 'Pays', gender: 'Male', date_of_birth: '06/02/1971', phone: '885-907-2301', email: 'lpaysr@desdev.cn', password: 'Gg0y6q',
// },
// {
//   first_name: 'Steve', last_name: 'Sedcole', gender: 'Male', date_of_birth: '09/05/1988', phone: '628-495-1765', email: 'ssedcoles@baidu.com', password: 'tGyQRlJWsw0',
// },
// {
//   first_name: 'Karoline', last_name: 'Rearden', gender: 'Female', date_of_birth: '03/10/1992', phone: '442-724-5537', email: 'kreardent@spiegel.de', password: '9bDDskf2SCq',
// },
// {
//   first_name: 'Ruthanne', last_name: 'Mazzia', gender: 'Female', date_of_birth: '06/16/1998', phone: '233-313-0326', email: 'rmazziau@java.com', password: '3LiGhoeu',
// },
// {
//   first_name: 'Cristian', last_name: 'Mitcheson', gender: 'Male', date_of_birth: '12/06/1981', phone: '165-778-1375', email: 'cmitchesonv@weebly.com', password: 'eWM1SRJVm',
// },
// {
//   first_name: 'Aland', last_name: 'Zielinski', gender: 'Male', date_of_birth: '07/05/1975', phone: '239-796-5171', email: 'azielinskiw@fastcompany.com', password: 'mc6euDbEa1',
// },
// {
//   first_name: 'Katti', last_name: 'Geyton', gender: 'Female', date_of_birth: '03/17/1992', phone: '798-618-6558', email: 'kgeytonx@howstuffworks.com', password: 'arXTkwQM0',
// },
// {
//   first_name: 'Crystal', last_name: 'Ivimy', gender: 'Female', date_of_birth: '10/18/1993', phone: '694-529-5390', email: 'civimyy@ca.gov', password: 'FXf3wHzJ',
// },
// {
//   first_name: 'Mitzi', last_name: 'Hymas', gender: 'Female', date_of_birth: '11/22/1979', phone: '833-110-1578', email: 'mhymasz@npr.org', password: 'duprg2LkWL',
// },
// {
//   first_name: 'Denys', last_name: 'Keaves', gender: 'Male', date_of_birth: '02/21/2000', phone: '560-513-1112', email: 'dkeaves10@e-recht24.de', password: 'UFMMbA2CJ',
// },
// {
//   first_name: 'Leora', last_name: 'Puddephatt', gender: 'Female', date_of_birth: '09/02/1986', phone: '596-200-6670', email: 'lpuddephatt11@nba.com', password: 'hx6Fg1n7',
// },
// {
//   first_name: 'Iver', last_name: 'McIlory', gender: 'Male', date_of_birth: '08/28/2001', phone: '307-402-4419', email: 'imcilory12@amazonaws.com', password: 'xCHKcXvR',
// },
// {
//   first_name: 'Mamie', last_name: 'Tadman', gender: 'Female', date_of_birth: '11/28/2000', phone: '223-608-7203', email: 'mtadman13@examiner.com', password: '5NDRHHyk',
// },
// {
//   first_name: 'Darci', last_name: 'Grcic', gender: 'Female', date_of_birth: '04/06/1991', phone: '381-537-2426', email: 'dgrcic14@huffingtonpost.com', password: 'lxbPA1b4aYZE',
// },
// {
//   first_name: 'Kessiah', last_name: 'Aaron', gender: 'Female', date_of_birth: '09/22/1973', phone: '911-415-0382', email: 'kaaron15@wikipedia.org', password: 'T3ZJWHNzp65M',
// },
// {
//   first_name: 'Chrissy', last_name: 'Skittrall', gender: 'Male', date_of_birth: '10/27/1998', phone: '913-837-0225', email: 'cskittrall16@sfgate.com', password: 'HUioxvWa7',
// },
// {
//   first_name: 'Estell', last_name: 'Raimbauld', gender: 'Female', date_of_birth: '06/12/1998', phone: '105-201-6179', email: 'eraimbauld17@unicef.org', password: 'aM1KABYg',
// },
// {
//   first_name: 'Nedda', last_name: 'Pleasants', gender: 'Female', date_of_birth: '02/03/1998', phone: '930-446-4929', email: 'npleasants18@wired.com', password: 'ztL026uhk',
// },
// {
//   first_name: 'Kalila', last_name: 'Caser', gender: 'Female', date_of_birth: '12/08/1999', phone: '113-516-6480', email: 'kcaser19@edublogs.org', password: 'dTvwey',
// },
// {
//   first_name: 'Janeta', last_name: 'Andor', gender: 'Female', date_of_birth: '01/14/1975', phone: '201-673-5471', email: 'jandor1a@typepad.com', password: 'U00ry8PEKp',
// },
// {
//   first_name: 'Marline', last_name: 'Northidge', gender: 'Female', date_of_birth: '07/11/1974', phone: '537-971-1845', email: 'mnorthidge1b@dion.ne.jp', password: '0GCoSr',
// },
// {
//   first_name: 'Daren', last_name: 'Puttrell', gender: 'Male', date_of_birth: '08/30/1976', phone: '310-451-9540', email: 'dputtrell1c@de.vu', password: 'QryHh1K3',
// },
// {
//   first_name: 'Freddy', last_name: 'Blakeston', gender: 'Male', date_of_birth: '12/17/1988', phone: '818-210-6335', email: 'fblakeston1d@youtu.be', password: 'zl5P76H',
];

const events = [{
  title: 'NYC Mean Street Clean Up', description: 'Clean these mean New York City Streets', date: '01/01/2021', time: '12:55 AM', duration: 2, street_address: '71026 Corry Plaza', city: 'San Antonio', state: 'Texas', zip_code: '78265', donation: '$602.28', comments: 'Proactive reciprocal projection',
},
{
  title: 'Mature Love Session', description: 'Spend some time with some mature citizens!', date: '09/13/2021', time: '5:43 PM', duration: 3.5, street_address: '56 La Follette Circle', city: 'Sacramento', state: 'California', zip_code: '95894', donation: '$1796.30', comments: 'Organized holistic Graphic Interface',
},
{
  title: 'Kids Rockin Saturday ', description: 'Saturday morning fun zone for kids!', date: '06/15/2021', time: '7:14 PM', duration: 3, street_address: '60 Golf Street', city: 'Pompano Beach', state: 'Florida', zip_code: '33064', donation: '$937.45', comments: 'User-centric background structure',
},
{
  title: 'montes nascetur ridiculus mus vivamus', description: 'iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet', date: '11/19/2021', time: '12:16 AM', duration: 2, street_address: '47 Pepper Wood Hill', city: 'San Jose', state: 'California', zip_code: '95133', donation: '$570.92', comments: 'Business-focused clear-thinking time-frame',
},
{
  title: 'nulla eget eros elementum pellentesque quisque', description: 'lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus', date: '02/10/2021', time: '1:34 PM', duration: 2, street_address: '7 Calypso Circle', city: 'Washington', state: 'District of Columbia', zip_code: '20337', donation: '$528.15', comments: 'Digitized eco-centric attitude',
},
{
  title: 'vestibulum sit amet cursus id turpis integer aliquet', description: 'lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in', date: '01/12/2021', time: '9:07 PM', duration: 4, street_address: '62198 Moose Center', city: 'Atlanta', state: 'Georgia', zip_code: '30301', donation: '$1463.75', comments: 'Compatible solution-oriented system engine',
},
{
  title: 'massa volutpat convallis morbi odio', description: 'congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in', date: '08/27/2021', time: '5:55 PM', duration: 1.5, street_address: '89 Twin Pines Pass', city: 'Independence', state: 'Missouri', zip_code: '64054', donation: '$1884.03', comments: 'Secured mission-critical frame',
},
{
  title: 'metus vitae ipsum aliquam non mauris morbi', description: 'pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec', date: '10/11/2021', time: '9:04 AM', duration: 2, street_address: '66 Redwing Alley', city: 'Kansas City', state: 'Missouri', zip_code: '64125', donation: '$1473.60', comments: 'Monitored dedicated software',
},
{
  title: 'nec molestie sed justo pellentesque viverra pede', description: 'congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id', date: '12/19/2020', time: '9:49 AM', duration: 3, street_address: '729 Ramsey Parkway', city: 'Seattle', state: 'Washington', zip_code: '98109', donation: '$1127.01', comments: 'Distributed heuristic project',
},
{
  title: 'augue vestibulum rutrum rutrum neque', description: 'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim', date: '08/06/2021', time: '8:44 AM', duration: 2.5, street_address: '9 Fordem Street', city: 'Elmira', state: 'New York', zip_code: '14905', donation: '$451.60', comments: 'Realigned motivating strategy',
},
{
  title: 'vestibulum proin eu mi nulla ac enim in tempor turpis', description: 'bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est', date: '09/26/2021', time: '2:53 PM', duration: 3, street_address: '5585 Continental Terrace', city: 'Baltimore', state: 'Maryland', zip_code: '21275', donation: '$1219.81', comments: 'User-centric encompassing flexibility',
},
{
  title: 'nec condimentum neque sapien placerat ante nulla', description: 'turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices', date: '01/03/2021', time: '12:27 PM', duration: 1, street_address: '5 Elmside Street', city: 'Charleston', state: 'West Virginia', zip_code: '25362', donation: '$1398.13', comments: 'Function-based bandwidth-monitored archive',
},
{
  title: 'morbi odio odio elementum eu interdum eu', description: 'proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc', date: '04/06/2021', time: '11:40 AM', duration: 2, street_address: '76031 Oxford Crossing', city: 'Raleigh', state: 'North Carolina', zip_code: '27621', donation: '$175.08', comments: 'Triple-buffered impactful productivity',
},
{
  title: 'velit donec diam neque vestibulum eget vulputate ut', description: 'erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque', date: '01/14/2021', time: '3:11 AM', duration: 1.5, street_address: '50 Kennedy Circle', city: 'Kansas City', state: 'Missouri', zip_code: '64153', donation: '$1884.32', comments: 'Multi-tiered dedicated database',
},
{
  title: 'quis orci eget orci vehicula condimentum curabitur in', description: 'tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas', date: '06/25/2021', time: '1:54 AM', duration: 1.5, street_address: '2 Moulton Trail', city: 'Richmond', state: 'Virginia', zip_code: '23237', donation: '$405.28', comments: 'Reduced value-added standardization',
},
{
  title: 'parturient montes nascetur ridiculus mus etiam vel augue', description: 'proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi', date: '10/10/2021', time: '11:52 PM', duration: 1.5, street_address: '57 Hayes Court', city: 'Garden Grove', state: 'California', zip_code: '92645', donation: '$1487.71', comments: 'Diverse asymmetric parallelism',
},
{
  title: 'morbi a ipsum integer a nibh in quis justo', description: 'vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue', date: '05/24/2021', time: '8:05 AM', duration: 4, street_address: '8234 Lunder Park', city: 'Chattanooga', state: 'Tennessee', zip_code: '37405', donation: '$430.07', comments: 'Multi-layered bi-directional projection',
},
{
  title: 'semper est quam pharetra magna', description: 'fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed', date: '09/17/2021', time: '12:43 PM', duration: 1, street_address: '76 Spohn Crossing', city: 'Washington', state: 'District of Columbia', zip_code: '20231', donation: '$982.20', comments: 'Compatible actuating data-warehouse',
},
{
  title: 'ultrices posuere cubilia curae donec', description: 'ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a', date: '03/26/2021', time: '7:44 AM', duration: 1, street_address: '21504 Debra Junction', city: 'Dallas', state: 'Texas', zip_code: '75265', donation: '$940.35', comments: 'De-engineered asymmetric concept',
},
{
  title: 'Food for Friends', description: 'Taking some quality time to share a meal with those in need', date: '04/18/2021', time: '7:23 PM', duration: 3.5, street_address: '2442 Memorial Junction', city: 'Washington', state: 'District of Columbia', zip_code: '20029', donation: '$1251.05', comments: 'Face to face exuding paradigm',
}];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const createdEvents = await Promise.all(events.map((event) => Events.create({ ...event })));
    const createdUsers = await Promise.all(users.map((user) => User.create({ ...user })));
    for (let i = 0; i < createdEvents.length; i++) {
      await createdEvents[i].setUsers(createdUsers[Math.floor(Math.random() * createdUsers.length)]);
    }
  } catch (err) {
    console.log(red(err));
  }
};
module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
