# votecuss
votecuss stands for "Vote and Discussion". It is a information platform that allows users to vote for different actions as well as share facts and opinions. 

Application Architecture

Backend
--Proxy server(nginx)
--App server
  --database(MongoDB:mongoose)
  --web server(nodejs)
    --request listener(koa2)
	--authentication middleware(koa-jwt)
	--routing middleware(koa-route)
  --websocket(socket-io)
  --controllers
  --cache(redis)
  --view engine(pug)

Frontend
--stylesheet(bootstrap)
--interactive HTML(jquery)
--AJAX(fetch)
--websocket(socket.io-client)