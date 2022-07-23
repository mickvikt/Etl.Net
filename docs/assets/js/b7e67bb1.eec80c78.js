"use strict";(self.webpackChunketlnetdocumentation=self.webpackChunketlnetdocumentation||[]).push([[6005],{1504:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(7294),r=a(7273);r.Z.initialize({startOnLoad:!0});const l=t=>{let{chart:e}=t;return(0,n.useEffect)((()=>{r.Z.contentLoaded()}),[]),n.createElement("pre",{className:"prism-code language-csharp codeBlock_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module thin-scrollbar",style:{backgroundColor:"rgb(248, 248, 242)",color:"rgb(40, 42, 54)"}},n.createElement("div",{className:"mermaid"},e))}},6810:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(1504);const i={sidebar_position:2},o="Normalize a flat structure",d={unversionedId:"recipes/normalize",id:"recipes/normalize",title:"Normalize a flat structure",description:'In traditional ETL, normalizing flat inputs (meaning dispatching one row into several tables, with one table that makes reference to the other one.s) is typically a duty that is far to be straight forward. This is extremely surprising to say the least, as this is one of the purposes of the "T" (Transform) in the acronym "ETL".',source:"@site/docs/recipes/2_normalize.mdx",sourceDirName:"recipes",slug:"/recipes/normalize",permalink:"/Etl.Net/docs/recipes/normalize",draft:!1,editUrl:"https://github.com/paillave/Etl.Net/blob/develop/documentation/docs/recipes/2_normalize.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Deal with files and protocols",permalink:"/Etl.Net/docs/recipes/dealWithFiles"},next:{title:"Read files",permalink:"/Etl.Net/docs/recipes/readFiles"}},s={},p=[{value:"Principle",id:"principle",level:2},{value:"Practically",id:"practically",level:2}],u={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"normalize-a-flat-structure"},"Normalize a flat structure"),(0,r.kt)("p",null,'In traditional ETL, normalizing flat inputs (meaning dispatching one row into several tables, with one table that makes reference to the other one.s) is typically a duty that is far to be straight forward. This is extremely surprising to say the least, as this is one of the purposes of the "T" (Transform) in the acronym "ETL".'),(0,r.kt)("p",null,"ETL.NET has a very clear and straight forward out of the box tools to handle this ",(0,r.kt)("strong",{parentName:"p"},"very")," usual pattern when it is about to import flat structures such as files. This mechanism is so straight forward that it seems almost ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"magical")),"!"),(0,r.kt)("h2",{id:"principle"},"Principle"),(0,r.kt)("p",null,"This normalization is possible thanks to two features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A way to know the original row/rows that are at the source of the current row"),(0,r.kt)("li",{parentName:"ul"},"The capacity to make a Select/Update/Insert for each row to save with ",(0,r.kt)("inlineCode",{parentName:"li"},"Paillave.EtlNet.EntityFrameworkCore")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Paillave.EtlNet.SqlServer"))),(0,r.kt)("p",null,"The normalization pattern lie on the possibility to know what was the initial row or rows that permitted to result to a payload."),(0,r.kt)("p",null,"Behind the scenes, each row has a list of unique identifiers linked to it, and each operator is supposed to know how to combine these uids depending on its purpose. When a stream is issuing payloads that have a list of unique identifiers under the hood, it is called a ",(0,r.kt)("strong",{parentName:"p"},"correlated stream"),".\nOut of the box, streams are not correlated for performance and memory purpose. For a stream to be correlated, it must pass through a dedicated operator using ",(0,r.kt)("inlineCode",{parentName:"p"},"SetForCorrelation"),". This operator simply attributes a list that contains a different single unique identifier to each row. Every operator of the core of ETL.NET knows how to handle correlated stream and issues a proper correlated stream regarding to its logic."),(0,r.kt)("p",null,"For example, let's imagine this sequence of events:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value1"),(0,r.kt)("th",{parentName:"tr",align:null},"Value2"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"z")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"z")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"e")))),(0,r.kt)("p",null,"Correlating this stream using ",(0,r.kt)("inlineCode",{parentName:"p"},"SetForCorrelation")," would change it this way:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value1"),(0,r.kt)("th",{parentName:"tr",align:null},"Value2"),(0,r.kt)("th",{parentName:"tr",align:null},"Correlation ids"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"z"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dafb56a0-7bfd-482f-8ed2-e47ded1abfe3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"z"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"851267eb-50e0-47f9-b988-e17e75a458d2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8af7348a-c004-4c4d-90db-f6fa5213cabb"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4b1ac39f-89c0-426b-a1e2-07c63aebf938"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c6781c10-0f6b-4668-97e6-2788627aa7a4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"338aabe0-3266-4c2d-9b0e-770b0c0b14dd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c131bb0b-97fa-4c63-86a5-ebcbeb0800f6"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a1f13dfc-f9e4-46af-9e7a-1e64271f1691"))))),(0,r.kt)("p",null,"Making a ",(0,r.kt)("inlineCode",{parentName:"p"},"Distinct")," based on ",(0,r.kt)("inlineCode",{parentName:"p"},"Value2")," would give this stream as a result:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value1"),(0,r.kt)("th",{parentName:"tr",align:null},"Value2"),(0,r.kt)("th",{parentName:"tr",align:null},"Correlation ids"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"z"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dafb56a0-7bfd-482f-8ed2-e47ded1abfe3"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"851267eb-50e0-47f9-b988-e17e75a458d2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8af7348a-c004-4c4d-90db-f6fa5213cabb"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"4b1ac39f-89c0-426b-a1e2-07c63aebf938"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"338aabe0-3266-4c2d-9b0e-770b0c0b14dd"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"c131bb0b-97fa-4c63-86a5-ebcbeb0800f6"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c6781c10-0f6b-4668-97e6-2788627aa7a4"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"a1f13dfc-f9e4-46af-9e7a-1e64271f1691"))))),(0,r.kt)("p",null,"Then, let's save payloads of this stream based on the business key (",(0,r.kt)("inlineCode",{parentName:"p"},"Value2"),"). As the save system gets the Id wether an occurrence already exists in the database or not, we get this result:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value2"),(0,r.kt)("th",{parentName:"tr",align:null},"Id"),(0,r.kt)("th",{parentName:"tr",align:null},"Correlation ids"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"z"),(0,r.kt)("td",{parentName:"tr",align:null},"45"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dafb56a0-7bfd-482f-8ed2-e47ded1abfe3"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"851267eb-50e0-47f9-b988-e17e75a458d2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"69"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8af7348a-c004-4c4d-90db-f6fa5213cabb"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"4b1ac39f-89c0-426b-a1e2-07c63aebf938"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"338aabe0-3266-4c2d-9b0e-770b0c0b14dd"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"c131bb0b-97fa-4c63-86a5-ebcbeb0800f6"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"e"),(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c6781c10-0f6b-4668-97e6-2788627aa7a4"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"a1f13dfc-f9e4-46af-9e7a-1e64271f1691"))))),(0,r.kt)("p",null,"Now, for each event of the first correlated stream, we can get the related event from our last stream using the operator ",(0,r.kt)("inlineCode",{parentName:"p"},"CorrelateToSingle"),". This operator, for each event of the first stream, tries to find the first event of the second stream that contains a correlation key that exists in the current correlation key list. The result is the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value1"),(0,r.kt)("th",{parentName:"tr",align:null},"Value2"),(0,r.kt)("th",{parentName:"tr",align:null},"Value2Id"),(0,r.kt)("th",{parentName:"tr",align:null},"Correlation ids"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"z"),(0,r.kt)("td",{parentName:"tr",align:null},"45"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dafb56a0-7bfd-482f-8ed2-e47ded1abfe3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"z"),(0,r.kt)("td",{parentName:"tr",align:null},"45"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"851267eb-50e0-47f9-b988-e17e75a458d2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"69"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8af7348a-c004-4c4d-90db-f6fa5213cabb"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"69"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4b1ac39f-89c0-426b-a1e2-07c63aebf938"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"e"),(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c6781c10-0f6b-4668-97e6-2788627aa7a4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"69"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"338aabe0-3266-4c2d-9b0e-770b0c0b14dd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"69"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c131bb0b-97fa-4c63-86a5-ebcbeb0800f6"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"e"),(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a1f13dfc-f9e4-46af-9e7a-1e64271f1691"))))),(0,r.kt)("p",null,"And now, this can be saved in the database as well by making reference to the foreign key of rows that were previously saved."),(0,r.kt)("h2",{id:"practically"},"Practically"),(0,r.kt)("p",null,"Below, the structure of the file to import:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"column name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Title of the blog post")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"author"),(0,r.kt)("td",{parentName:"tr",align:null},"Author name of the post")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"Email of the post author")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"Date and time when the post was submitted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"category"),(0,r.kt)("td",{parentName:"tr",align:null},"Category of the post")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"link"),(0,r.kt)("td",{parentName:"tr",align:null},"Only for post with a link: url of the link")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"post"),(0,r.kt)("td",{parentName:"tr",align:null},"Only for a post with a text: text of the post")))),(0,r.kt)("p",null,"The file would look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="post.csv"',title:'"post.csv"'},'title,author,email,timestamp,category,link,post\nFundProcess features,St\xe9phane Royer,stephane.royer@fundprocess.lu,20210109113005,Category 2,https://www.fundprocess.lu/features/,\nETL.NET revealed,Paillave,admroyer@hotmail.com,20210508181126,Category 2,,"This a post, about ETL.NET"\nETL.NET page,Paillave,admroyer@hotmail.com,20210504164510,Category 1,https://paillave.github.io/Etl.Net/,\nFundProcess presentation,St\xe9phane Royer,stephane.royer@fundprocess.lu,20210203124051,Category 2,,"This a ""post"", about FundProcess"\nFundProcess website,St\xe9phane Royer,stephane.royer@fundprocess.lu,20210106103005,Category 1,http://www.fundprocess.lu,\nETL.NET nuget,Paillave,admroyer@hotmail.com,20200504164510,Category 1,http://www.nuget.org/packages/Etl.Net,\nETL.NET information,Paillave,admroyer@hotmail.com,20200518071024,Category 3,,"This ""another post"" about ETL.NET"\nFundProcess information,St\xe9phane Royer,stephane.royer@fundprocess.lu,20210819124550,Category 1,,This another post about FundProcess\n')),(0,r.kt)("p",null,"The normalized structure where this file must be imported is this one:"),(0,r.kt)(l.Z,{chart:"\nclassDiagram\nclass Author {\n    Id:int\n    Email:string\n    Name:string\n}\nclass Category {\n    Id:int\n    Code:string\n    Name:string\n}\nclass Post {\n    <<abstract>>\n    Id:int\n    DateTime:DateTime\n    Title:string\n    AuthorId:int\n    CategoryId:int?\n}\nclass LinkPost {\n    Url:Uri\n}\nclass TextPost {\n    Text:string\n}\nPost --\x3e Author\nPost --\x3e Category\nLinkPost --|> Post\nTextPost --|> Post",mdxType:"Mermaid"}),(0,r.kt)("p",null,"The corresponding Entity Framework DbContext is this one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="SimpleDbContext.cs"',title:'"SimpleDbContext.cs"'},'using System;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace BlogTutorial.DataAccess\n{\n    public class SimpleDbContext : DbContext\n    {\n        private readonly string _connectionString = null;\n        public SimpleTutorialDbContext() { }\n        public SimpleTutorialDbContext(string connectionString) => _connectionString = connectionString;\n        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n        {\n            optionsBuilder.UseSqlServer(_connectionString ?? @"Server=localhost,1433;Database=BlogTutorial;user=BlogTutorial;password=TestEtl.TestEtl;MultipleActiveResultSets=True");\n        }\n        protected override void OnModelCreating(ModelBuilder modelBuilder)\n        {\n            var authorBuilder = modelBuilder.Entity<Author>();\n            authorBuilder.ToTable(nameof(Author));\n            authorBuilder.HasKey(i => i.Id);\n            authorBuilder.HasIndex(i => i.Email).IsUnique();\n            authorBuilder.Property(i => i.Id).UseIdentityColumn();\n            authorBuilder.Property(i => i.Name).IsRequired();\n            authorBuilder.Property(i => i.Email).HasMaxLength(250).IsRequired();\n\n            var categoryBuilder = modelBuilder.Entity<Category>();\n            categoryBuilder.ToTable(nameof(Category));\n            categoryBuilder.HasKey(i => i.Id);\n            categoryBuilder.HasIndex(i => i.Code).IsUnique();\n            categoryBuilder.Property(i => i.Id).UseIdentityColumn();\n            categoryBuilder.Property(i => i.Name).IsRequired();\n            categoryBuilder.Property(i => i.Code).IsRequired().HasMaxLength(20);\n\n            var postBuilder = modelBuilder.Entity<Post>();\n            postBuilder.ToTable(nameof(Post));\n            postBuilder.HasKey(i => i.Id);\n            postBuilder.HasIndex(i => new { i.AuthorId, i.DateTime }).IsUnique();\n            postBuilder.Property(i => i.Id).UseIdentityColumn();\n            postBuilder.HasOne(i => i.Author).WithMany().OnDelete(DeleteBehavior.Restrict).HasForeignKey(i => i.AuthorId);\n            postBuilder.HasOne(i => i.Category).WithMany().OnDelete(DeleteBehavior.Restrict).HasForeignKey(i => i.CategoryId);\n\n            var linkPostBuilder = modelBuilder.Entity<LinkPost>();\n            linkPostBuilder.HasBaseType<Post>();\n            linkPostBuilder.Property(i => i.Url).IsRequired().HasConversion(\n                uri => uri == null ? null : uri.ToString(),\n                value => string.IsNullOrWhiteSpace(value) ? null : new Uri(value));\n\n            var textPostBuilder = modelBuilder.Entity<TextPost>();\n            textPostBuilder.HasBaseType<Post>();\n            textPostBuilder.Property(i => i.Text).IsRequired();\n\n            var executionLogBuilder = modelBuilder.Entity<ExecutionLog>();\n            executionLogBuilder.ToTable(nameof(ExecutionLog));\n            executionLogBuilder.HasKey(i => i.Id);\n            executionLogBuilder.Property(i => i.Id).UseIdentityColumn();\n            executionLogBuilder.Property(i => i.EventType).HasMaxLength(250).IsRequired();\n            executionLogBuilder.Property(i => i.Message).IsRequired();\n        }\n    }\n    public class Author\n    {\n        public int Id { get; set; }\n        public string Email { get; set; }\n        public string Name { get; set; }\n    }\n    public class Category\n    {\n        public int Id { get; set; }\n        public string Code { get; set; }\n        public string Name { get; set; }\n    }\n    public abstract class Post\n    {\n        public int Id { get; set; }\n        public DateTime DateTime { get; set; }\n        public string Title { get; set; }\n        public int AuthorId { get; set; }\n        public Author Author { get; set; }\n        public int? CategoryId { get; set; }\n        public Category Category { get; set; }\n    }\n    public class LinkPost : Post\n    {\n        public Uri Url { get; set; }\n    }\n    public class TextPost : Post\n    {\n        public string Text { get; set; }\n    }\n    public class ExecutionLog\n    {\n        public int Id { get; set; }\n        public DateTime DateTime { get; set; }\n        public Guid ExecutionId { get; set; }\n        public string EventType { get; set; }\n        public string Message { get; set; }\n    }\n}\n')),(0,r.kt)("p",null,"Now, let's apply the theory in this practical situation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{15,28,29}","{15,28,29}":!0},'private static void DefineProcess(ISingleStream<string> contextStream)\n{\n    var rowStream = contextStream\n        .CrossApplyFolderFiles("list all required files", "*.csv", true)\n        .CrossApplyTextFile("parse file", FlatFileDefinition.Create(i => new\n        {\n            Author = i.ToColumn("author"),\n            Email = i.ToColumn("email"),\n            TimeSpan = i.ToDateColumn("timestamp", "yyyyMMddHHmmss"),\n            Category = i.ToColumn("category"),\n            Link = i.ToColumn("link"),\n            Post = i.ToColumn("post"),\n            Title = i.ToColumn("title"),\n        }).IsColumnSeparated(\',\'))\n        .SetForCorrelation("set correlation for row");\n\n    var authorStream = rowStream\n        .Distinct("remove author duplicates based on emails", i => i.Email)\n        .Select("create author instance", i => new Author { Email = i.Email, Name = i.Author })\n        .EfCoreSave("save authors", o => o.SeekOn(i => i.Email).AlternativelySeekOn(i => i.Name));\n\n    var categoryStream = rowStream\n        .Distinct("remove category duplicates", i => i.Category)\n        .Select("create category instance", i => new Category { Code = i.Category, Name = i.Category })\n        .EfCoreSave("save categories", o => o.SeekOn(i => i.Code).DoNotUpdateIfExists());\n\n    var postStream = rowStream\n        .CorrelateToSingle("get related category", categoryStream, (l, r) => new { Row = l, Category = r })\n        .CorrelateToSingle("get related author", authorStream, (l, r) => new { l.Row, l.Category, Author = r })\n        .Select("create post instance", i => string.IsNullOrWhiteSpace(i.Row.Post)\n            ? new LinkPost\n            {\n                AuthorId = i.Author.Id,\n                CategoryId = i.Category.Id,\n                DateTime = i.Row.TimeSpan,\n                Title = i.Row.Title,\n                Url = new Uri(i.Row.Link)\n            } as Post\n            : new TextPost\n            {\n                AuthorId = i.Author.Id,\n                CategoryId = i.Category.Id,\n                DateTime = i.Row.TimeSpan,\n                Title = i.Row.Title,\n                Text = i.Row.Post\n            })\n        .EfCoreSave("save posts", o => o.SeekOn(i => new { i.AuthorId, i.DateTime }));\n}\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It can happen sometimes that, depending on the situation, C# compiler cannot resolve properly which version of ",(0,r.kt)("inlineCode",{parentName:"p"},"EfCoreSave")," to use and takes the one for non correlated streams. If so, use ",(0,r.kt)("inlineCode",{parentName:"p"},"EfCoreSaveCorrelated")," instead to prevent the compiler to be confused."))))}m.isMDXComponent=!0}}]);