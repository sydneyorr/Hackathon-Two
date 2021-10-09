 # This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Costume.destroy_all
House.destroy_all
require "faker"


m=User.create(name:"Michaela", email:"mjsivertsen@msn.com",   password:"boo2021", costume:true, house:false)
a=User.create(name:"Alan", email:"alanmamulski@gmail.com", password:"boo2021", costume:true , house:false)
s=User.create(name:"Sydney", email:"sydneywhitters@gmail.com", password:"boo2021", costume:true , house:false)
k=User.create(name:"Kelsey", email:"bethenerd.dev@gmail.com", password:"boo2021", costume:true , house:false)

m.costumes.create(title:"skeleton", image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZJbdmxBZTscJVQHO7aDw45Gh6hVgpOTkooqm2MfruaJvFR59urzw0yjKFKkDYckd-hsL1VBdEJsw&usqp=CAc")
a.costumes.create(title:"Chewbacca", image:"https://cdn.shopify.com/s/files/1/0565/3073/1187/products/4195_1_400x.jpg?v=1626736449")
s.costumes.create(title:"Shrek", image:"https://cdn.shoplightspeed.com/shops/626272/files/12870361/1652x2313x2/shrek-costume-boys.jpg")
k.costumes.create(title:"witch", image:"https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2841040738800?fmt=webp&qlt=90&wid=767&hei=767")


10.times do
x=User.create(
  name:Faker::Name.first_name,
  email:Faker::Internet.email,
  house:true, 
  costume:false,
  password:"boo2021" 
)
x.houses.create(
  street:Faker::Address.street_address, 
  city:Faker::Address.city, 
  zip:Faker::Address.zip,
  state:"Utah"
)
end