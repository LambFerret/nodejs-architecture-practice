# webAPI
## basic CRUD with DB in mongo Cluster 

This is not strict RestAPI but more likely just HTTP method communication protocol

- get /:title 
- post /:title (need params title to confirm this title and for practice my skills)
- patch /:title
- remove /:title

It use Node + express.js + mongoDB and some other stuffs. mongoDB is not local DB, its MongoDB Atlas that cloud DB cluster. it's may cause unstable DB, but clustering DB strategy 
make this problem more stable.
This architecture followed micro-services and some clean architecture. It has some advantage for service. 
It divides in 4 areas;

- Entity
- Use-case
- Controller 
- ...And other things like UI, Config...

In entity, this makes DB form
Use-case is what Users will do. In this case, 4 kinds of use-case, CRUD.
Controller is http methods as far as my understands. Get methods is Read in CRUD, so i connect Controller and use-case in here
Their dependancy is adjacent layers. for example, Entity layer's dependancy is only in Use-case.

Thanks