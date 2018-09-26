class SearchController < ApplicationController
  def index
    text = params["search"]    
    res = Typhoeus.get("localhost:1439/search?text=#{text}")
    puts res.body;    
  end
end
