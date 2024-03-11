# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


# db/seeds.rb
puts 'Seeding products...'


category1 = Category.create(name: 'Skincare' ,image:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1671638859-41n2xR5IlLL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:* ')
category2 = Category.create(name: 'Makeup' ,image:'https://m.media-amazon.com/images/I/81kFGZGkJ8L.jpg')
category3 = Category.create(name: 'Haircare' ,image:'https://m.media-amazon.com/images/I/71iYda0VIKL.jpg')
category4 = Category.create(name: 'Shower' ,image:'https://dreamskinhaven.co.ke/wp-content/uploads/2022/12/3336907_0000.jpg')
category5 = Category.create(name: 'Fragrances' ,image:'https://di2ponv0v5otw.cloudfront.net/posts/2022/12/02/638a84d13b982a4b7b1b573a/m_638a8504ff0484af42aa508a.jpg')
category5 = Category.create(name: 'POpular Products' ,image:'https://di2ponv0v5otw.cloudfront.net/posts/2022/12/02/638a84d13b982a4b7b1b573a/m_638a8504ff0484af42aa508a.jpg')

product1 = Product.create(name: 'La Roshe-Posay serum',description: 'Best hyaluronic acid serum.This is a rich, dermatologist-developed moisturizer for dry and dry combination skin types',price: 29.99,category: category1,image: ' https://cdn.salla.sa/dNNgg/njsY3ZT1CE28U0zE6Qmg2dryERzjzPVDLM2Mq4Yu.jpg')
product2 = Product.create(name: ' Medik8 vitamin c',description: 'Helps brighten your skin.This is a rich, dermatologist-developed moisturizer for dry and dry combination skin types',price: 30.99,category: category1 ,image: 'https://media.glamourmagazine.co.uk/photos/6465ec2fa6025497ad889dcf/master/w_1280,c_limit/FACE%20SERUM%20180523%201.jpg')
product3 = Product.create(name: 'Clinique moisturizer',description: 'Clinique Dramatically Different Moisturizing Creamis a rich, dermatologist-developed moisturizer for dry and dry combination skin types',price: 19.99,category: category1 ,image: 'https://static.beautytocare.com/media/catalog/product/cache/global/image/85e4522595efc69f496374d01ef2bf13/c/l/clinique-dramatically-different-moisturizing-cream-50ml.jpg')
product4 = Product.create(name: 'Kombucha serum',description: 'Great for when your skin is acting up.It was developed with all skin types in mind.You will not regret splurging on this',price: 19.99,category: category1 ,image: 'https://dfe8fw3fyk4wz.cloudfront.net/images/04846d6043317dcd.jpg')

product5 = Product.create(name: 'sk-ii facial essence', description: 'Eliminates all black heads and leaves your skin supple smooth', price: 29.99,category: category1 ,image: 'https://montecristomagazine.com/wp-content/uploads/2018/02/Beauty_Page_2_Image_0002_12.jpg')
product6 = Product.create(name: 'Nars rising eyeshadow pallete',description: 'Beauty you can love',price: 29.99,category: category2 ,image: 'https://www.narscosmetics.eu/dw/image/v2/BCMQ_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwa7a93877/hi-res/2023/OrgasmCollection2023/NARS_SP23_OrgasmCollection_PDPCrop_Soldier_9well_EyeshadowPalette_OrgasmRising_Open_GLBL_2000x2000_B.jpg?sw=1500&sh=1500&sm=fit')
product7 = Product.create(name: ' Flormar silk matte liquid lipstick',description: 'A creamy rich Lipstick formula with high colour payoff in a no-shine matte finish.',price: 29.99,category: category2 ,image: 'https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/2/1206442-1.jpg')
product8 = Product.create(name: 'Makeup revolution mascara',description: 'Best for days when you want length and volume.The quality will keep you buying it.',price: 29.99,category: category2 ,image: 'https://static.thcdn.com/images/large/original//productimg/1600/1600/12657003-6424789914455688.jpg')
product9 = Product.create(name: 'Real techniques makeup brushes',description: 'Set of brushes with foundation brush,powder brush,contour brush,eyeshadow brush and quality beauty blender.',price: 29.99,category: category2 ,image: 'https://realtechniques.com/cdn/shop/files/1786_RT_EverydayEssentialsSet_OOP_Front_300dpiRGB_43d4fd29-39b4-4777-b419-cb2897a8ad71_1200x.jpg?v=1683303836')
product10 = Product.create(name: 'Nars loose setting powder',description: 'A light weight loose setting powder that blends seamlessly to set makeup for up to 14 hours!',price: 29.99,category: category2 ,image: 'https://m.media-amazon.com/images/I/61I0C2ontsL.jpg')
product11 = Product.create(name: 'Casablanca matte bronzer',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category2 ,image: 'https://i5.walmartimages.com/asr/70dbbf93-0aac-4286-ab95-586a40c742bf.2013f530fff140c371efe2a5d57b4772.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF')

product12 = Product.create(name: 'Mielle hair oil',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category3 ,image: 'https://assets.vogue.com/photos/62d5a0bf605bc16477f56a6c/3:4/w_748%2Cc_limit/slide_13.jpg')
product13 = Product.create(name: 'Mielle coil sculpting custard',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category3 ,image: 'https://m.media-amazon.com/images/I/41isHuaK5lS._SL500_.jpg')
product14 = Product.create(name: 'Curl cloud hair gel',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category3 ,image: 'https://cdn.shopify.com/s/files/1/0277/3201/7249/files/711No5YUqQS._SL1500.webp?v=1672953155')
product15 = Product.create(name: ' Got 2b hair glue',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category3 ,image: 'https://zandaux.com/image/images/643266c9e32d1.webp?p=full')
product16 = Product.create(name: 'Zandaux flat iron ',description: ' Crafted from the most advanced materials, Straightener features Technology & aircraft-grade warp-resistant titanium plates for highly efficient heat . .',price: 29.99,category: category3 ,image: 'https://i5.walmartimages.com/asr/70dbbf93-0aac-4286-ab95-586a40c742bf.2013f530fff140c371efe2a5d57b4772.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF')
product17 = Product.create(name: 'Vega professional hair brush',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category3 ,image: ' https://rukminim2.flixcart.com/image/850/1000/xif0q/hair-brush/6/u/1/ceramix-shine-round-brush-43mm-hair-brush-vpphb-03-vega-original-imagnhcggsghgnng.jpeg?q=20')

product18 = Product.create(name: ' At the beach shower gel',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category4 ,image: 'https://www.bathandbodyworks.ca/on/demandware.static/-/Sites-bbw_ca-storefront-catalog/default/dw5115d1e6/hires/026266712.jpg')
product19 = Product.create(name: 'Pantene shower gel',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category4 ,image: ' https://hips.hearstapps.com/hmg-prod/images/1-best-shower-products-pantene-micerelle-shampoo-1524513370.jpg')
product20 = Product.create(name: ' Somerset milk shower gel',description: ' This refreshing shower gel is a rich cleanser for the body, offering a silky smooth touch to the skin. The softening foam gives an intense ...',price: 29.99,category: category4 ,image: ' https://www.webbsdirect.co.uk/images/products/large/833924.jpg')
product21 = Product.create(name: 'Ray irish moss shower gel ',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category4 ,image: 'https://i0.wp.com/allthingsface.co.ke/storage/2023/02/34BEDE8D-AB5F-4727-A2D9-A73B03633ED7.jpeg?fit=1000%2C1000&ssl=1')
product22 = Product.create(name: ' Byca body wash ',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category4 ,image: 'https://static.smallable.com/1244921-648x648q80/cade-wood-cleansing-gel-480-ml.jpg ')
product23 = Product.create(name: ' Molton Brown shower gel',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category4 ,image: 'https://bluemercury.com/cdn/shop/products/global_images-008080151568-1.jpg?v=1693527398 ')

product24 = Product.create(name: ' ',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category2 ,image: 'https://i5.walmartimages.com/asr/70dbbf93-0aac-4286-ab95-586a40c742bf.2013f530fff140c371efe2a5d57b4772.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF')
product25 = Product.create(name: 'Casablanca matte bronzer',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category2 ,image: 'https://i5.walmartimages.com/asr/70dbbf93-0aac-4286-ab95-586a40c742bf.2013f530fff140c371efe2a5d57b4772.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF')
product26 = Product.create(name: 'Casablanca matte bronzer',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category2 ,image: 'https://i5.walmartimages.com/asr/70dbbf93-0aac-4286-ab95-586a40c742bf.2013f530fff140c371efe2a5d57b4772.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF')
product27 = Product.create(name: 'Casablanca matte bronzer',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category2 ,image: 'https://i5.walmartimages.com/asr/70dbbf93-0aac-4286-ab95-586a40c742bf.2013f530fff140c371efe2a5d57b4772.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF')
product28 = Product.create(name: 'Casablanca matte bronzer',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category2 ,image: 'https://i5.walmartimages.com/asr/70dbbf93-0aac-4286-ab95-586a40c742bf.2013f530fff140c371efe2a5d57b4772.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF')
product29 = Product.create(name: 'Casablanca matte bronzer',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category2 ,image: 'https://i5.walmartimages.com/asr/70dbbf93-0aac-4286-ab95-586a40c742bf.2013f530fff140c371efe2a5d57b4772.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF')
product30 = Product.create(name: 'Casablanca matte bronzer',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category2 ,image: 'https://i5.walmartimages.com/asr/70dbbf93-0aac-4286-ab95-586a40c742bf.2013f530fff140c371efe2a5d57b4772.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF')
product31 = Product.create(name: 'Casablanca matte bronzer',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category2 ,image: 'https://i5.walmartimages.com/asr/70dbbf93-0aac-4286-ab95-586a40c742bf.2013f530fff140c371efe2a5d57b4772.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF')





























puts 'Products seeded.'


# Add more products as needed
