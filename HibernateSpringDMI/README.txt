Spring Bean Direct Method Invocation (DMI) with Hibernate  DataSource
---------------------------------------------------------------------
This example illustrates a DataSource accessing a Spring Javabean
using Direct Method Invocation (DMI), which then services the request via
Hibernate.


Using sample projects 
--------------------- 
Instructions are provided below for importing the sample project with Eclipse or
building it from the command line with Ant.
 
If you instead want to add SmartGWT Pro to an existing project, see these
instructions:
 
   http://www.smartclient.com/smartgwtee/javadoc/com/smartgwt/client/docs/SgwtEESetup.html
 
For instructions for launching tools such as the Developer Console, Visual
Builder or DataSource Wizards, see the SmartGWT FAQ:
 
   http://forums.smartclient.com/showthread.php?t=8159


Build Prerequisites
-------------------
- Google Web Toolkit, 1.5.3 or later (2.0 or later recommended)
  http://code.google.com/webtoolkit/download.html

  Ensure GWT_HOME to the location of your Google Web Toolkit SDK directory.

  
- If building with ant:
  Apache Ant, 1.6.5 or later (1.7.1 or later recommended)
  http://ant.apache.org/
  
  A copy of Ant is included in the SmartGWT distribution under the
  'apache-ant-1.7.1' directory.
  
  Ensure ANT_HOME to the location of your Apache Ant directory, and the
  'ant' command is in your PATH.

- If building with Eclipse:
  Google Eclipse Plugin (GEP)
  http://code.google.com/eclipse/docs/download.html

  The GEP is highly recommended if using Eclipse. Its use is assumed in the
  instructions below.


Build and deployment using ant
------------------------------
- 'ant hosted'
  Run in GWT Hosted Mode.

  
- 'ant'
  Compile for deployment.

  
- 'ant war'
  Compile for deployment and bundle into HibernateSpringDMI.war file.

  If you have a web container operating on localhost:8080, you can deploy
  HibernateSpringDMI.war into the web container and access 
  HibernateSpringDMI.war at:

    http://localhost:8080/HibernateSpringDMI/index.html
  

Eclipse Configuration
---------------------
Eclipse and GEP may be configured to open this sample as follows:

- Set the Eclipse Classpath variable SGWTPRO_HOME to point to the root directory
  of the SmartGWT Pro distribution. This is configured through
    Windows: Window  -> Preferences -> Java -> Build Path -> Classpath Variables
    MacOS X: Eclipse -> Preferences -> Java -> Build Path -> Classpath Variables
  The included Eclipse project files load JARs from $SGWTPRO_HOME/libs.
     
- Follow the instructions for  "Working with Existing Projects" with the GEP:
  http://code.google.com/eclipse/docs/existingprojects.html

- Finally, create a launch configuration and launch the app as described here:
  http://code.google.com/eclipse/docs/running_and_debugging.html


Database Configuration
----------------------
This sample connects to an HSQL database that contains various tables with
sample data. The database name is "isomorphic" and is located under
WEB-INF/db/hsqldb.

For ease of setup of this sample, a servlet listener HSQLServletContextListener
is configured in WEB-INF/web.xml to start and stop HSQL automatically as the
webapp is started/stopped. The contents of the database may be viewed
directly with the sample located at samples/db/run-dbm: select 
'HSQL Database Engine Server' and point to

    jdbc:hsqldb:hsql://localhost/isomorphic

to browse the contents of the HSQL database.


Debugging for the first time
----------------------------
Due to a bug in GWT, the very first time you launch hosted mode, tools such as
the Admin Console will not work. Restart to correct this problem. Compiled mode
is not affected.
