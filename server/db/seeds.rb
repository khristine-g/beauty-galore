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
category6 = Category.create(name: 'Candles' ,image:' https://www.bathandbodyworks.ca/dw/image/v2/BGFZ_PRD/on/demandware.static/-/Sites-bbw_ca-storefront-catalog/default/dw70c1445c/hires/026393037.jpg?sw=1000&sh=1000&sm=fit ')
category7 = Category.create(name: 'Best Selling', image: 'https://i.pinimg.com/736x/8a/e6/4e/8ae64e1d5f0fd5af6ec46dba7785f6ea.jpg')


trending1 = Trending.create(name:'Clearly pink  Daily Cleanser' ,price: 9.99, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,category:category1,image:'https://www.provencebeauty.com/cdn/shop/files/FINAL_ProductShot_Unboxed_ClearlyPink_321-SEAL-PDP-CROP-1660.jpg?v=1709591813')
trending2 = Trending.create(name:'Morphe Natural Wonder  Eyeshadow Palette' ,price: 10.99,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'   ,category:category2,image:'https://uk.morphe.com/cdn/shop/products/Morphe_NaturalWonder_18WPalette_PDP_Open_grande.jpg?v=166179345')
trending3 = Trending.create(name:'Hydra vegetal moistrurizer' ,price: 19.99, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,category:category1,image:' https://media.yves-rocher.com.sa/media/catalog/product/cache/3396ea3f96c12b8daa79648474e9f5ee/1/0/1001300114-bundle8-hv.jpg')
trending4 = Trending.create(name:'L.A. Girl pro Concealer ' ,price: 5.99, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,category:category2,image:'https://www.beautyclick.co.ke/wp-content/smush-webp/2024/01/L.A._Girl_High_Definition_Pro_Conceal_Concealer_GC981.jpg.webp')
trending5 = Trending.create(name:' Kimuse Soft Cream Blush' ,price: 9.99, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,category:category2,image:'https://m.media-amazon.com/images/I/51d7OxtbKkL._SL1000_.jpg')
trending6 = Trending.create(name:'Kayali vanilla  Eau de Parfum ' ,price: 10.99, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,category:category5,image:'https://www.sephora.com/productimages/sku/s2224491-main-zoom.jpg?imwidth=450')
trending7 = Trending.create(name:'You’re The One Shower Gel ' ,price: 19.99, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,category:category4,image:'https://dreamskinhaven.co.ke/wp-content/uploads/2023/07/26139372.webp')
trending8 = Trending.create(name:' Exquisite Black Glass Jar Scented Candle' ,price: 24.99, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,category:category6,image:' https://images-cdn.ubuy.co.in/633fec5b0b38155a585fd99d-fight-eagle-scented-candle-exquisite.jpg')







product1 = Product.create(name: 'La Roshe-Posay serum',description: 'Best hyaluronic acid serum.This is a rich, dermatologist-developed moisturizer for dry and dry combination skin types',price: 29.99,category: category1,image: ' https://cdn.salla.sa/dNNgg/njsY3ZT1CE28U0zE6Qmg2dryERzjzPVDLM2Mq4Yu.jpg')
product2 = Product.create(name: ' Medik8 vitamin c',description: 'Helps brighten your skin.This is a rich, dermatologist-developed moisturizer for dry and dry combination skin types',price: 30.99,category: category1 ,image: 'https://media.glamourmagazine.co.uk/photos/6465ec2fa6025497ad889dcf/master/w_1280,c_limit/FACE%20SERUM%20180523%201.jpg')
product3 = Product.create(name: 'Clinique moisturizer',description: 'Clinique Dramatically Different Moisturizing Creamis a rich, dermatologist-developed moisturizer for dry and dry combination skin types',price: 19.99,category: category1 ,image: 'https://static.beautytocare.com/media/catalog/product/cache/global/image/85e4522595efc69f496374d01ef2bf13/c/l/clinique-dramatically-different-moisturizing-cream-50ml.jpg')
product4 = Product.create(name: 'Kombucha serum',description: 'Great for when your skin is acting up.It was developed with all skin types in mind.You will not regret splurging on this',price: 19.99,category: category1 ,image: ' https://mesugatra.com/cdn/shop/files/14700206_1.jpg?v=1697637347')

product5 = Product.create(name: 'sk-ii facial essence', description: 'Eliminates all black heads and leaves your skin supple smooth', price: 29.99,category: category1 ,image: 'https://sv4-cdn.stylevana.com/media/catalog/product/cache/005b379b5fee834623527f49c94522bc/s/k/sk-ii-facial-treatment-essence-pitera-essence--234.jpg')
product6 = Product.create(name: 'Nars rising eyeshadow pallete',description: 'Beauty you can love',price: 29.99,category: category2 ,image: 'https://www.narscosmetics.eu/dw/image/v2/BCMQ_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwa7a93877/hi-res/2023/OrgasmCollection2023/NARS_SP23_OrgasmCollection_PDPCrop_Soldier_9well_EyeshadowPalette_OrgasmRising_Open_GLBL_2000x2000_B.jpg?sw=1500&sh=1500&sm=fit')
product7 = Product.create(name: ' Flormar silk matte liquid lipstick',description: 'A creamy rich Lipstick formula with high colour payoff in a no-shine matte finish.',price: 29.99,category: category2 ,image: 'https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/2/1206442-1.jpg')
product8 = Product.create(name: 'Makeup revolution mascara',description: 'Best for days when you want length and volume.The quality will keep you buying it.',price: 29.99,category: category2 ,image: 'https://static.thcdn.com/images/large/original//productimg/1600/1600/12657003-6424789914455688.jpg')
product9 = Product.create(name: 'Real techniques makeup brushes',description: 'Set of brushes with foundation brush,powder brush,contour brush,eyeshadow brush and quality beauty blender.',price: 29.99,category: category2 ,image: 'https://realtechniques.com/cdn/shop/files/1786_RT_EverydayEssentialsSet_OOP_Front_300dpiRGB_43d4fd29-39b4-4777-b419-cb2897a8ad71_1200x.jpg?v=1683303836')
product10 = Product.create(name: 'Nars loose setting powder',description: 'A light weight loose setting powder that blends seamlessly to set makeup for up to 14 hours!',price: 29.99,category: category2 ,image: 'https://m.media-amazon.com/images/I/61I0C2ontsL.jpg')
product11 = Product.create(name: 'Casablanca matte bronzer',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category2 ,image: 'https://i5.walmartimages.com/asr/70dbbf93-0aac-4286-ab95-586a40c742bf.2013f530fff140c371efe2a5d57b4772.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF')

product12 = Product.create(name: 'Mielle hair oil',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category3 ,image: 'https://assets.vogue.com/photos/62d5a0bf605bc16477f56a6c/3:4/w_748%2Cc_limit/slide_13.jpg')
product13 = Product.create(name: 'Mielle coil sculpting custard',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category3 ,image: 'https://m.media-amazon.com/images/I/41isHuaK5lS._SL500_.jpg')
product14 = Product.create(name: 'Curl cloud hair gel',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category3 ,image: 'https://cdn.shopify.com/s/files/1/0277/3201/7249/files/711No5YUqQS._SL1500.webp?v=1672953155')
product15 = Product.create(name: ' Got 2b hair glue',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category3 ,image: ' https://www.true.co.ke/cdn/shop/products/Got2b-Ultra-Glued-Styling-Gel-For-Edges-150ml_1024x1024.jpg?v=1616059666')
product16 = Product.create(name: 'Zandaux flat iron ',description: ' Crafted from the most advanced materials, Straightener features Technology & aircraft-grade warp-resistant titanium plates for highly efficient heat . .',price: 29.99,category: category3 ,image: ' https://zandaux.com/image/images/643266c9e32d1.webp?p=full')
product17 = Product.create(name: 'Vega professional hair brush',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category3 ,image: ' https://rukminim2.flixcart.com/image/850/1000/xif0q/hair-brush/6/u/1/ceramix-shine-round-brush-43mm-hair-brush-vpphb-03-vega-original-imagnhcggsghgnng.jpeg?q=20')

product18 = Product.create(name: ' At the beach shower gel',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category4 ,image: 'https://www.bathandbodyworks.ca/on/demandware.static/-/Sites-bbw_ca-storefront-catalog/default/dw5115d1e6/hires/026266712.jpg')
product19 = Product.create(name: 'Pantene shower gel',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category4 ,image: ' https://hips.hearstapps.com/hmg-prod/images/1-best-shower-products-pantene-micerelle-shampoo-1524513370.jpg')
product20 = Product.create(name: ' Somerset milk shower gel',description: ' This refreshing shower gel is a rich cleanser for the body, offering a silky smooth touch to the skin. The softening foam gives an intense ...',price: 29.99,category: category4 ,image: ' https://www.webbsdirect.co.uk/images/products/large/833924.jpg')
product21 = Product.create(name: 'Ray irish moss shower gel ',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category4 ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbU2pVQrsYvv1GbjqIEZPg2vTE6J8v6iKJ3bB6eTZ0AubnFYqYy1ai-Ap7azAmf6-0UGk&usqp=CAU')
product22 = Product.create(name: ' Byca body wash ',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category4 ,image: 'https://static.smallable.com/1244921-648x648q80/cade-wood-cleansing-gel-480-ml.jpg ')
product23 = Product.create(name: 'Plumeria Body Wash  ',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category4 ,image: ' https://dreamskinhaven.co.ke/wp-content/uploads/2023/07/026676456.jpg')

product24 = Product.create(name: ' poison eau de toilette',description: ' Provocative and mysterious from its creation, Poison is the ultimate fragrant weapon of heightened seduction by Dior. The exceptional alchemy of the fragrance is created by rich, spicy, floral and ambery notes with sensual accords of Honey and Musk. A charismatic and unforgettable oriental fragrance.  ',price: 30.99,category: category5 ,image: ' https://static.sweetcare.pt/img/prd/488/v-638267402258635542/dior-002772di_01.jpg')
product25 = Product.create(name: ' Black Orchid Eau de Parfum Set - TOM FORD',description: ' The dramatic Black Orchid Eau de Parfum opens with aphrodisiac black truffle and narcotic ylang ylang -touched with effervescent bergamot and bitter orange. Rum-soaked, sweet black plum surrounds the black orchid extract in golden sensuality, while woody patchouli and creamy vanilla wrap the orchid in rich warmth. ',price: 23.99,category: category5 ,image: '  https://storage.googleapis.com/scentfied/products/black-orchid-eau-de-parfum-set-tom-ford.webp')
product26 = Product.create(name: ' Coco Mademoiselle  chanel ',description: 'The Coco Mademoiselle sparkling perfume begins with a seductive top note of Citrus and Bergamot, creating an intense burst of freshness. The delicate flowery notes of May Rose, Grasse and Jasmine beautifully blossom as the fragrance evolves, creating a romantic and feminine scent. The perfume seamlessly transitions into deeper accords, including patchouli and vetiver, which provide a warm and woody depth. ',price: 35.99,category: category5 ,image: 'https://storage.googleapis.com/scentfied/products/coco-mademoiselle-eau-de-parfum.webp ')
product27 = Product.create(name: ' Baccarat Rouge 540',description: ' Luminous and sophisticated, Baccarat Rouge 540 lays on the skin like an amber floral and woody breeze. A poetic alchemy composed by Francis Kurkdjian, where the aerial notes of jasmine and the radiance of saffron carry mineral facets of ambergris and woody tones of a freshly cut cedar wood.',price: 40.99,category: category5 ,image: 'https://shopping-premiereavenue.com/medias/products/11184/500x500/baccarat-rouge-540-11184-9513661.jpg ')
product28 = Product.create(name: ' YSL Yves Saint Laurent Mon Paris',description: ' Mon Paris Eau de Parfum is a sweet fruity floral perfume for women. Sweet notes of luscious red berries are softened by datura flower and anchored by the woody scent of white musk blended beautifully together with patchouli to create a long-lasting women fragrance that is romantic in every way. ',price: 12.99,category: category5 ,image: ' https://parfumaktion.ch/9292-large_default/ysl-yves-saint-laurent-mon-paris-set-50ml-bl-50ml.jpg')
product29 = Product.create(name: ' The Dior Homme Sport Eau de Toilette',description: '  The new Dior Homme Sport Eau de Toilette plays with themes of freshness and sensuality. The fragrance was announced as radiant, enriched with a new, lasting impression.Energetic and elegant, the new Dior Homme Sport combines the luminescence of citrus and spice notes with a sensual touch of woods and amber that pack "the punch of a boxers uppercut". ',price: 22.99,category: category5 ,image: 'https://storage.googleapis.com/scentfied/products/the-dior-homme-sport-eau-de-toilette_5Xnb.webp ')
product30 = Product.create(name: ' Allure Homme Eau de Toilette Spray',description: 'Allure Homme Eau de Toilette Spray is a clean, crisp, warm and sexy fragrance that expresses a mans inner strength and charisma.Its fresh, spicy and woody fragrances reveal the presence of the man who wears it. It is endowed with vigorous fresh top notes of coriander and mandarin, its subtly spiced and blended into clean, intense notes of cedar. ',price: 29.99,category: category5 ,image: 'https://storage.googleapis.com/scentfied/products/allure-homme-eau-de-toilette-spray.webp ')
product31 = Product.create(name: ' Victoria’s Secret Bombshell Passion',description: ' This Eau de Parfum is a bouquet of electric florals. At the heart is a luminous and lush combination of Queen peony—a Bombshell signature—and saturated fuchsia rose. Brilliant cassis adds a jolt of juicy, yet elegant, sparkle. Sumptuous woods meet feather-light musk for a modern, warm foundation.',price: 16.99,category: category5 ,image: 'https://www.victoriassecret.com/p/874x1165/tif/4e/dc/4edc2e23ad2340a68de779b4a29fa6dc/111706547709_OF_F.jpg ')


product32 = Product.create(name: 'Vanilla Coco Scented Candle ',description: ' The exotic scent of Coconut Vanilla carries you away to a bright summer beach with the sound of waves crashing along the shore, and the resplendent sun warming your soul. We have created the perfect pairing of exotic coconut and rich vanilla in our Apothecary of Fragrant Goods®.',price: 32.99,category: category6 ,image: ' https://www.colishco.com/cdn/shop/products/VanillaCoco2wick_1445x.jpg?v=1686569676')
product33 = Product.create(name: ' Bath Body Works White Barn Vanilla Bean ',description: ' What it smells like: a creamy, cozy welcome home.Fragrance notes: Madagascar vanilla bean, homemade marshmallow, warm cinnamon and nutmeg. ',price: 30.99,category: category6 ,image: ' https://tshop.r10s.jp/founder/cabinet/founderimages2/024339607.jpg?fitin=720%3A720')
product34 = Product.create(name: ' Fancy Ceremony Scented Blue Glass Candle',description: ' Aromatize the room with our blue wax filled jar candle, scented with notes of lemon, peach, and green pear, cocooned in the embrace of rosewood and musk. As the top notes waft, the heart notes of magnolia and rose become prominent. Place it in your bedroom or in the living area for a lingering fragrance. Notes: Top notes: Lemon, peach, green pear Heart notes: Lily of the valley, rose, magnolia Base notes: Hedione, rosewood, musk',price: 40.99,category: category6 ,image: ' https://www.purehomeandliving.com/cdn/shop/files/8907895093587_3.jpg?v=1693568829&width=1090')
product35 = Product.create(name: ' Maison Francis Kurkdjian Baccarat Rouge 540 Scented Candle',description: '  A scented candle featuring the luminous and sophisticated scent of Baccarat Rouge 540. Fragrance story: Baccarat Rouge 540 fills the air with an amber, floral and woody breeze. It is a poetic alchemy with a graphic and highly condensed signature. Notes: Jasmine, saffron, cedarwood, ambergris. ',price: 35.99,category: category6 ,image: ' https://johnlewis.scene7.com/is/image/JohnLewis/238255791')
product36 = Product.create(name: ' Maison Margiela Replica Lazy Sunday Morning Candle ',description: ' Replica Lazy Sunday Morning candle evokes the soft sensation of freshly washed linen sheets on a sunny morning. Clean, fresh and comforting, the immaculate light gently warms your skin. Made from high quality mineral wax, this cotton wick candle lasts up to 40 hours.',price: 60.99,category: category6 ,image: ' https://static.thcdn.com/productimg/960/960/13183547-9105070864109461.jpg')
product37 = Product.create(name: 'White Barn Champagne Toast 3-Wick Scented Candle ',description: 'The Champagne Toast 3-wick candle from Bath & Body Works is 14.5oz, has a 25 to 45 hor burn time and is a fruity and sweet delight. Its fragrance evokes the sensation of a sparkling spritzer with notes of bubbly champagne, sparkling berries, and juicy tangerine. ',price: 26.99,category: category6 ,image: ' https://fnf.co.ke/wp-content/uploads/White-Barn-Champagne-Toast-3-Wick-Scented-Candle-e1696762206636.jpg')
product38 = Product.create(name: ' Sweater Weather 3-Wick Candle',description: ' This 3 wick soy blend candle is hand poured into a large glass jar. The jarred candle retains its scent better than a regular candle. Sweater Weather" is made with juniper berries, sage and eucalyptus. Its delicious fragrance will fill the room with an invigorating scent and lightness.',price: 27.99,category: category6 ,image: 'https://www.bathandbodyworks.ca/dw/image/v2/BGFZ_PRD/on/demandware.static/-/Sites-bbw_ca-storefront-catalog/default/dw71c248b4/hires/026531878.jpg?sw=1000&sh=1000&sm=fit ')
product39 = Product.create(name: ' White Barn Whipped Coffee 3-Wick Scented Candle',description: 'White Barn Whipped Coffee 3-Wick Scented Candle delivers an amazing, room-filling fragrance experience that smells like espresso, whipped sweet cream, caramel syrup and sugar crystals.',price: 35.99,category: category6 ,image: ' https://fnf.co.ke/wp-content/uploads/White-Barn-Whipped-Coffee-3-Wick-Scented-Candle-562x562.jpg')


product40 = Product.create(name: 'La Roshe-Posay serum',description: 'Best hyaluronic acid serum.This is a rich, dermatologist-developed moisturizer for dry and dry combination skin types',price: 29.99,category: category7,image: ' https://cdn.salla.sa/dNNgg/njsY3ZT1CE28U0zE6Qmg2dryERzjzPVDLM2Mq4Yu.jpg')
product41 = Product.create(name: 'Real techniques makeup brushes',description: 'Set of brushes with foundation brush,powder brush,contour brush,eyeshadow brush and quality beauty blender.',price: 29.99,category: category7 ,image: 'https://realtechniques.com/cdn/shop/files/1786_RT_EverydayEssentialsSet_OOP_Front_300dpiRGB_43d4fd29-39b4-4777-b419-cb2897a8ad71_1200x.jpg?v=1683303836')
product42 = Product.create(name: ' Somerset milk shower gel',description: ' This refreshing shower gel is a rich cleanser for the body, offering a silky smooth touch to the skin. The softening foam gives an intense ...',price: 29.99,category: category7 ,image: ' https://www.webbsdirect.co.uk/images/products/large/833924.jpg')
product43 = Product.create(name: ' Baccarat Rouge 540',description: ' Luminous and sophisticated, Baccarat Rouge 540 lays on the skin like an amber floral and woody breeze. A poetic alchemy composed by Francis Kurkdjian, where the aerial notes of jasmine and the radiance of saffron carry mineral facets of ambergris and woody tones of a freshly cut cedar wood.',price: 40.99,category: category7 ,image: 'https://shopping-premiereavenue.com/medias/products/11184/500x500/baccarat-rouge-540-11184-9513661.jpg ')
product44 = Product.create(name: 'White Barn Champagne Toast 3-Wick Scented Candle ',description: 'The Champagne Toast 3-wick candle from Bath & Body Works is 14.5oz, has a 25 to 45 hor burn time and is a fruity and sweet delight. Its fragrance evokes the sensation of a sparkling spritzer with notes of bubbly champagne, sparkling berries, and juicy tangerine. ',price: 26.99,category: category7 ,image: ' https://fnf.co.ke/wp-content/uploads/White-Barn-Champagne-Toast-3-Wick-Scented-Candle-e1696762206636.jpg')
product45 = Product.create(name: 'Mielle hair oil',description: ' This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky .',price: 29.99,category: category7 ,image: 'https://assets.vogue.com/photos/62d5a0bf605bc16477f56a6c/3:4/w_748%2Cc_limit/slide_13.jpg')


































puts 'Products seeded.'


# Add more products as needed
