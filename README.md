# Reviews System Architecture
### The goal of this project was to take a small dataset and scale it to 10 million documents on a horizontally scaled AWS EC2 Deployment. Using Two Linux EC2 Microservers with elastic IPs, NGINX Round Robin Loadbalancing, as well as NGINX's built-in caching, I was able to achieve 6,000 Requests per Second, 99.75% success rate, and a 76ms response time. 

### These results were tested locally using Artillery.io and then online through New Relic
## Screens
NewRelic Cloud results
![NewRelic](https://seeddata-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-06-15+at+5.17.19+PM.jpg)
Artillery local performance
![Artillery](https://seeddata-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-06-15+at+5.27.43+PM.jpg)
Dataset of Reviews CSV - can provide file on request.
![Dataset Size](https://seeddata-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-06-15+at+5.28.38+PM.jpg)
# Usage
  - Fork and clone repo(s)
# Install dependencies
  - npm install
# Start up microservice
1. npm run start-main (seed the database and starts the server)
2. npm run build

To view, open browser and visit localhost: 3001

Deployed Site no longer up, but feel free to reach out if you'd like to test.
Deployed site: http://ec2-18-191-56-236.us-east-2.compute.amazonaws.com:3001/

