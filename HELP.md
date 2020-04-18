# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.2.6.RELEASE/maven-plugin/)
* [Rest Repositories](https://docs.spring.io/spring-boot/docs/2.2.6.RELEASE/reference/htmlsingle/#howto-use-exposing-spring-data-repositories-rest-endpoint)
* [Spring Data JPA](https://docs.spring.io/spring-boot/docs/2.2.6.RELEASE/reference/htmlsingle/#boot-features-jpa-and-spring-data)
* [Thymeleaf](https://docs.spring.io/spring-boot/docs/2.2.6.RELEASE/reference/htmlsingle/#boot-features-spring-mvc-template-engines)

### Guides
The following guides illustrate how to use some features concretely:

* [Accessing JPA Data with REST](https://spring.io/guides/gs/accessing-data-rest/)
* [Accessing Neo4j Data with REST](https://spring.io/guides/gs/accessing-neo4j-data-rest/)
* [Accessing MongoDB Data with REST](https://spring.io/guides/gs/accessing-mongodb-data-rest/)
* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)
* [Handling Form Submission](https://spring.io/guides/gs/handling-form-submission/)

### Enhancements
The following enhancements were made to the spring tutorial
* No need to use thymeleaf. Removed the thymeleaf dependency. Added redirection in the home controller to index.html 
* used typescript instead of pure js
* used example from https://github.com/vamsigoli/springboot-reactjs-maven with video at https://www.youtube.com/watch?v=7XxH-G9ckeU

* Create a real react app using the below command
   * npx create-react-app frontend --template typescript in the src/main folder

* use axios instead of rest.js.
    * npm install axios
    * https://github.com/badgateway/ketting has the alternative to the rest.js used in the tutorial. the rest.js is not
    updated anymore
    
* HAL Types are taken from https://github.com/evert/hal-types/blob/master/src/index.ts

   

