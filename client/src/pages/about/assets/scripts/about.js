//pass in the paragrphs to the about page as an array object
const paragraphOne = `Presently, I attended the <b>UC Berkeley Extension Coding Bootcamp</b>.  The curriculum prepares students for <b>Full Stack Developer</b> roles.   The subject matter 
  includes <b>JavaScript, React, Node.js, MySQL, NoSQL with MongoDB, Mongoose</b> for the design and development of MongoDB, <b>MySQL, Express, and 
  GraphQL.</b>  In other words, to familiarize and produce projects, in the end, with <b>MERN</b>.  The main projects involved collaboration with team members, 
  included in my profile section, are the Trail Api to search for National Parks, Health Quest to learn and implement good health practices, and Meow Market, to add 
  feline products to a cart and place an order.  The current Web App is developed with React, as well.  I am currently taking a few Udemy courses online, as well, to 
  further my background with React-Redux and React, in order to increase my Full Stack knowledge base.`;

const paragraphTwo = `Throughout my career, I have gained substantial experience in various sectors including 
real estate, finance, and healthcare, serving in both contractual roles and full-time 
positions.   The technical skills utilized were primarily using a Microsoft base with C# .Net, 
and SQL Server.  Including, the development for report exports with Excel, and VB6/VBA 
development, as needed.  The positions required a significant number of internal and 
external reports.   We used Crystal Reports and SQL Report Builder to present the data.   
My two full-time positions were at <b>Disclosure Source</b>, who specialize in property 
hazard disclosures, and the <b>University of California Office of the President</b>, to 
manage GEP(endowment), UCRP( retirement), and 403B(government retirement) plans.  
For Disclosure Source, my accomplishments include the Migration of the entire system 
into AWS Cloud, as well as handling the transactions to the Accounting Database, Great 
Plains, for customer transactions, and the conversion of Hazard Reports from Crystal 
Reports to a code-based version using Iron PDF.  At UCOP, my accomplishments were to 
convert Access and VBA, to C# .net and SQL Server, and the conversion for the Private 
Equity Group to use a new program for data entry, previously in MS Access, to C# .Net and 
SQL Server. `;

const paragraphThree = `Finally, my activities outside of work include bike rides, jogging, hiking, enjoying the 
outdoors, and to always striving to learn technologies for the support of the encompassing 
company/group.  I appreciate your time for reviewing my experience and profile.`;

const paragraphs = [
  {
    id: "1",
    data: `${paragraphOne}`,
  },
  {
    id: "2",
    data: `${paragraphTwo}`,
  },
  {
    id: "3",
    data: `${paragraphThree}`,
  },
  {
    id: 4,
    data: "Richard Thomas",
  },
];

export default paragraphs;
