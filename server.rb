require 'sinatra'


###############
##  ROUTES   ##
###############


get '/' do
	erb :'index.html'
end
