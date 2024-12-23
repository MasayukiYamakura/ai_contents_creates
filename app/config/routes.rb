Rails.application.routes.draw do
  post '/generate_blog', to: 'blog_generator#generate'
end