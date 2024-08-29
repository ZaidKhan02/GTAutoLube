
const data = [
    {
        id: 1,
        img: "https://media-www.canadiantire.ca/product/automotive/auto-maintenance/oil-pcmo-/0289450/mobil-1-synthetic-5w30-4-73l-39a23bc8-6401-45a5-90e7-bb021e879ba0-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
        productName: "Mobil Super Synthetic 5W-30",
        price: 29.99,
        bundlePrice: "($90 for 3 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Mobil 1™ 5W-30 is an advanced full synthetic engine oil designed to keep your engine running like new by providing exceptional wear protection, cleaning power and overall performance. Mobil 1 5W-30 meets or exceeds the requirements of the industry's toughest standards and outperforms our conventional oils.",
        amount: 1
    },
    {
        id: 2,
        img: "https://media-www.canadiantire.ca/product/automotive/auto-maintenance/oil-pcmo-/0289453/mobil-1-synthetic-0w20-4-73l-cf9d69c2-ed3a-4232-8c91-5105a8769358-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
        productName: "Mobil Super Synthetic 0W-20",
        price: 29.99,
        bundlePrice: "($90 for 3 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "The Mobil 1™ Advanced Fuel Economy 0W20 Synthetic Engine/Motor Oil, 4.73-L, delivers fuel economy benefits and quick cold-weather starting while protecting your engine for the long haul. Its low viscosity and advanced synthetic formula help extend engine life by reducing wear and stress on starting components.",
        amount: 1
    },

    {
        id: 3,
        img: "https://starfire.com/wp-content/uploads/2022/06/Item-HeavyDutyELC-768x598.png",
        productName: "Heavy Duty ELC - STARFIRE ",
        price: 14.99,
        bundlePrice: "($90 for 6 jugs)",
        category: "Lubricants",
        subCategory: "coolant",
        description: "Starfire Purefleet Heavy Duty ELC Antifreeze/coolant is a premium, virgin, ethylene glycol-based heavy duty product that is designed for use in ANY diesel-powered truck, farm, off-road, marine or gasoline engine with aluminum and other engine metals.",
        amount: 1
    },

    {
        id: 4,
        img: "https://starfire.com/wp-content/uploads/2022/05/Item-ConventionalGreen-768x601.png",
        productName: "Conventional Green - STARFIRE",
        price: 14.99,
        bundlePrice: "($90 for 6 jugs)",
        category: "Lubricants",
        subCategory: "coolant",
        description: "STARFIRE Green 50/50 is a premium ethylene glycol-based antifreeze that provides all season protection and when used as directed, offers superior 5-way protection against freeze-up/boil over, wet sleeve, scale build up, rust corrosion, and sludge. ",
        amount: 1
    },

    {
        id: 5,
        img: "https://images-na.ssl-images-amazon.com/images/I/81LQEkkBohL._AC_UL348_SR348,348_.jpg",
        productName: "Mobil Synthetic Blend 5W-30",
        price: 24.99,
        bundlePrice: "($75 for 3 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Mobil Super Synthetic 5W-30 is a full synthetic engine oil formulation designed to help extend engine life in vehicles of all ages. It helps extend the life of your engine by protecting engine parts from high temperatures, sludge build-up, and wear.",
        amount: 1
    },
    {
        id: 6,
        img: "https://www.mobil.com/lubricants/-/media/project/wep/mobil/mobil-row-us-1/for-personal-vehicles/products-images/mobil-super-synthetic-5w-20/mobil-super-synthetic-5w-20fs-product.jpg?sc_lang=en&hash=FA0D6453E722B014FC0A0868C2126E25",
        productName: "Mobil Synthetic Blend 5W-20",
        price: 24.99,
        bundlePrice: "($75 for 3 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Mobil Super™ Synthetic 5W-20 is a full synthetic high-performance motor oil that provides excellent high temperature protection even under severe operating conditions.",
        amount: 1
    },

    {
        id: 7,
        img: "https://www.mobil.com/lubricants/-/media/project/wep/mobil/mobil-row-us-1/for-personal-vehicles/products-images/mobil-super-synthetic-10w-30/mobil-super-synthetic-10w-30fs-product.jpg",
        productName: "Mobil Synthetic Blend 10W-30",
        price: 24.99,
        bundlePrice: "($75 for 3 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "For long engine life, Mobil Super Synthetic 10W-30 is a full synthetic engine oil designed to help extend engine life in vehicles of all ages. 10W-30 is the viscosity recommended for many vehicles manufactured before the year 2000.",
        amount: 1
    },

    {
        id: 8,
        img: "https://media-www.canadiantire.ca/product/automotive/auto-maintenance/oil-pcmo-/0289452/mobil-1-synthetic-5w20-4-73l-2366bc91-ac6e-4216-bb23-f0cadc319480-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
        productName: "Mobil Super Synthetic 5W-20",
        price: 29.99,
        bundlePrice: "($90 for 3 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "The Mobil 1™ 5W20 Synthetic Engine/Motor Oil, 4.73-L, is an advanced, fully synthetic formula designed for quick cold weather starting and ultra-fast protection. The unique formula of the 5w20 oil helps prevent deposits and sludge build-up, enabling long engine life.",
        amount: 1
    },


    {
        id: 9,
        img: "https://assets.gulfoilltd.com/gomel/files/styles/large/public/2022-09/UltrasynthGDI5W20-4L.jpg?VersionId=Y2HFsj8ApHJZkav_V2b7kg2iNky9bJ76&itok=og6JHuo-",
        productName: "Gulf Full Synthetic 5W-20",
        price: 24.99,
        bundlePrice: "($75 for 3 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Gulf Ultrasynth GDI 5W-20 Oil with Wear-Guard Technology is a full synthetic passenger car oil designed to form a protective layer on critical engine parts. This reduces wear even under harsh driving conditions, ensuring a smooth driving experience and offering potential fuel economy benefits​.",
        amount: 1
    },
    {
        id: 10,
        img: "https://assets.gulfoilltd.com/gomel/files/styles/large/public/2022-09/UltrasynthGDI0W20-4L.jpg?VersionId=zYR_MiZM4_ZmxjZhBKRdtXuxW4Rlimlm&itok=XyrJL6zU",
        productName: "Gulf Full Synthetic 0W-20",
        price: 24.99,
        bundlePrice: "($75 for 3 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Gulf Ultrasynth 0W-20 engine oil is a full synthetic passenger car oil with Wear-Guard Technology forms a protective layer on critical engine parts to minimise damaging wear even under harsh driving conditions. This helps in delivering a smooth drive experience with a potential fuel economy benefit.",
        amount: 1
    },
    {
        id: 11,
        img: "https://assets.gulfoilltd.com/gomel/files/styles/large/public/2022-09/UltrasynthGDI5W30-4L.jpg?VersionId=ZGoRBfRMcj7YDagj.ZI.PkxP1Isj7v3x&itok=h673Jv7y",
        productName: "Gulf Full Synthetic 5W-30",
        price: 24.99,
        bundlePrice: "($75 for 3 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Gulf Ultrasynth X Plus 5W-30 is a fully synthetic passenger car motor oil specially developed for BS VI passenger cars (also compatible with cars meeting emission norms of BS-IV and below). It offers low-speed pre-ignition (LSPI) protection in turbocharged petrol (Gasoline Direct Injection) engines.",
        amount: 1
    },
    {
        id: 12,
        img: "https://m.media-amazon.com/images/I/61tlTcXraWL._AC_UL640_FMwebp_QL65_.jpg",
        productName: "Liqui Moly Special Tec SAE 0W-20",
        price: 44.99,
        bundlePrice: "($180 for 4 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Fully synthetic low viscosity premium class motor oil, developed to meet the high demands of modern Asian and American gasoline engines. The innovative additive technology guarantees best wear protection and engine cleanliness, lowest oil and fuel consumption and highest engine efficiency.",
        amount: 1
    },
    {
        id: 13,
        img: "https://m.media-amazon.com/images/I/811PoFtYpcL.jpg",
        productName: "Liqui Moly Special Tec SAE 5W-20",
        price: 44.99,
        bundlePrice: "($180 for 4 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Fully synthetic low viscosity premium class motor oil, developed to meet the high demands of modern Asian and American gasoline engines. The innovative additive technology guarantees best wear protection and engine cleanliness, lowest oil and fuel consumption and highest engine efficiency.",
        amount: 1
    },

    {
        id: 14,
        img: "https://liquimoly.cloudimg.io/v7/https://www.liqui-moly.com/media/catalog/product/7/6/7616_4b83.png?w=800&h=533&func=bound&sharp=1&org_if_sml=1&force_format=webp%252Coriginal",
        productName: "Liqui Moly Special Tec SAE 5W-30",
        price: 44.99,
        bundlePrice: "($180 for 4 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Fully synthetic low viscosity premium class motor oil, developed to meet the high demands of modern Asian and American gasoline engines. The innovative additive technology guarantees best wear protection and engine cleanliness, lowest oil and fuel consumption and highest engine efficiency.",
        amount: 1
    },
    {
        id: 15,
        img: "https://liquimoly.cloudimg.io/v7/https://www.liqui-moly.com/media/catalog/product/cache/afa4132dc622b3596e7e2b6e4e4bc624/2/1/21328_62a4.png?w=365&h=360&func=bound&sharp=1&org_if_sml=1&force_format=webp%252Coriginal",
        productName: "Liqui Moly Special Tec SAE 0W-16",
        price: 44.99,
        bundlePrice: "($180 for 4 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Fully synthetic premium class motor oil with extremely low viscosity, developed specifically to meet the high demands of modern Asian and American gasoline engines. Cutting edge additive technology guarantees best wear protection and engine cleanliness, lowest oil and fuel consumption and highest engine efficiency.",
        amount: 1
    },
    {
        id: 16,
        img: "https://cdn11.bigcommerce.com/s-svnjf7qbac/images/stencil/1280x1280/products/945/4949/thumbnail_detail_1581581408360_ctx-1__03440.1649299979.jpg?c=2",
        productName: "Liqui Moly High Tech SAE 5W-40",
        price: 59.99,
        bundlePrice: "($240 for 4 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Top class fully synthetic, all-season motor oil for superior performance and long engine life. For gasoline and diesel vehicles without particulate filters (GPF/DPF). Safe with catalytic converters and turbochargers. Use with extended oil change intervals as per manufacturer.",
        amount: 1
    },
    {
        id: 17,
        img: "https://kraveautomotive.ca/cdn/shop/files/2039_Longtime_High_Tech_5W_30_5l_f68e.png?v=1700164001",
        productName: "Liqui Moly High Tech SAE 5W-30",
        price: 59.99,
        bundlePrice: "($240 for 4 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Low SAPS fully synthetic motor oil for diesel engines. Specifically developed for engines equipped with diesel particulate filters (DPF). Use with extended oil change intervals as per manufacturer.",
        amount: 1
    },
    {
        id: 18,
        img: "https://i.ebayimg.com/images/g/6gsAAOSwj1RknfXj/s-l1200.webp",
        productName: "Toyota ATF WS Automatic Transmission Fluid",
        price: 11.99,
        bundlePrice: "($72 for 5 jugs)",
        category: "Oil",
        subCategory: "transmission-oil",
        description: "Toyota Genuine Automatic Transmission Fluid WS is a premium product designed to control wear and torque converter shudder for smooth operation. Automatic Transmission Fluid WS is not interchangeable with any other automatic transmission fluid.",
        amount: 1
    },
    {
        id: 19,
        img: "https://i.ebayimg.com/images/g/1~0AAOSwWKhlCsWv/s-l1200.webp",
        productName: "Toyota SAE 0W-16 Synthetic Motor Oil",
        price: 11.99,
        bundlePrice: "($72 for 6 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Mobil 1 0W-16 is a low viscosity, advanced full synthetic motor oil that helps deliver outstanding engine protection and enhanced fuel economy benefits to keep your engine running like new",
        amount: 1
    },
    {
        id: 20,
        img: "https://media-www.canadiantire.ca/product/automotive/heavy-auto-parts/air-conditioning-chemicals/0146138/45851-air-conditioning-43db2ac1-8b76-48d8-b386-f5f29f7054ac-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
        productName: "Emzone 12a A/C Cool Refrigerant",
        price: 9.99,
        bundlePrice: "($80 for 8 cans)",
        category: "Lubricants",
        subCategory: "aerosol-sprays",
        description: "The Emzone A/C Cool Refrigerant Recharge Can, 12a, 6-oz, is the environmentally conscious choice to boost the efficiency of your vehicle's air conditioning system. The refrigerant blend contains high-performance oil that improves compressor function and UV dye to help pinpoint leaks.",
        amount: 1
    },
    {
        id: 21,
        img: "https://emzone.ca/wp-content/uploads/2021/05/AC-cool-1234yf-rendering-2.jpg",
        productName: "Emzone A/C Cool Refrigerant 1234yf Replacement",
        price: 14.99,
        bundlePrice: "($120 for 8 cans)",
        category: "Lubricants",
        subCategory: "aerosol-sprays",
        description: "The Emzone A/C Cool Refrigerant Recharge Can, 1234YF, 6-oz, provides an eco-friendly alternative to ozone-depleting and global warming refrigerants. Containing 1234YF refrigerant, this 6-oz can is a replacement for R-12 and R134a products. It includes high-performance oil to boost system efficiency and universal UV dye for leak detection.",
        amount: 1
    },
    {
        id: 22,
        img: "https://media-www.canadiantire.ca/product/automotive/heavy-auto-parts/air-conditioning-chemicals/0146139/45856-air-conditioning-c70f7419-f259-4621-a983-aa3409501d88-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
        productName: "Emzone 12a A/C Stop Leak",
        price: 14.99,
        bundlePrice: "($120 for 8 cans)",
        category: "Lubricants",
        subCategory: "aerosol-sprays",
        description: "The Emzone A/C Stop Leak, 12a, 4-oz, is a simple fix for your old air conditioner. This leak sealant permanently seals leaks in metal and rubber parts like evaporators, condensers, driers, and O-rings to improve system efficiency and prevent future leaks.",
        amount: 1
    },

    {
        id: 23,
        img: "https://emzone.ca/wp-content/uploads/2019/10/emzone-pen-lube-1000.jpg",
        productName: "Emzone Penetrating Lubricant",
        price: 9.99,
        bundlePrice: "($120 for 12 jugs)",
        category: "Lubricants",
        subCategory: "aerosol-sprays",
        description: "Emzone Penetrating Lubricant is a high strength, fast acting lubricant that loosens and lubricates tight or sticky parts. It is ideal for use on bolts, nuts, hinges, locks, tools, and rollers to stops squeaks, displace moisture and help prevent rust.",
        amount: 1
    },
    {
        id: 24,
        img: "https://image.made-in-china.com/2f0j00BNkcpjPylabq/Car-Air-Conditioning-Refrigerant-Gas-Hfc-R134A-in-500g-Aerosol-Can.jpg",
        productName: "R134a Refrigerant",
        price: 19.99,
        bundlePrice: "($240 for 12 cans)",
        category: "Lubricants",
        subCategory: "aerosol-sprays",
        description: "Replaces lost refrigerant in A/C System",
        amount: 1
    },
    {
        id: 25,
        img: "https://m.media-amazon.com/images/I/61WywR7cApL.jpg",
        productName: "Toyota SAE 0W-20 Synthetic Motor Oil",
        price: 49.99,
        bundlePrice: "($150 for 3 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Toyota SAE OW-20 Synthetic Motor Oil offers increased stability in extreme temperatures and better cold weather starts, while also improving fuel economy and performance.",
        amount: 1
    },
    {
        id: 26,
        img: "https://media.wd40.ca/app/uploads/2022/02/06114228/MUP-3.8L-Front-white-background.jpg.webp",
        productName: "WD-40 Multi-Use Product",
        price: 49.99,
        bundlePrice: "($200 for 4 jugs)",
        category: "Lubricants",
        subCategory: "aerosol-sprays",
        description: "WD-40 Multi-Use Product protects metal from rust and corrosion, penetrates stuck parts, displaces moisture and lubricates almost anything.",
        amount: 1
    },
    {
        id: 27,
        img: "https://apim.canadiantire.ca/v1/product/api/v1/product/image/0251225p?baseStoreId=CTR&lang=en_CA&subscription-key=c01ef3612328420c9f5cd9277e815a0e&imwidth=640&impolicy=mZoom",
        productName: "Door Upholstery Remover",
        price: 8.99,
        bundlePrice: "(item is only sold individually)",
        category: "Tools",
        subCategory: "automotive-tools",
        description: "The OEMTOOLS Door Panel Remover, measuring 8 3/8-in, is a highly functional tool designed to remove door panel spring clips without causing damage to the upholstery.",
        amount: 1
    },
    {
        id: 28,
        img: "https://media-www.canadiantire.ca/product/automotive/auto-maintenance/auto-shop-equipment-supplies/0092176/certified-heavy-duty-tire-repair-kit-cc1326b1-50a0-4b6a-ab59-830202f9b2bb-jpgrendition.jpg",
        productName: "Tire Repair Kit",
        price: 9.99,
        bundlePrice: "(item is only sold individually)",
        category: "Tools",
        subCategory: "automotive-tools",
        description: "The Certified Heavy-Duty Tire Repair Kit provides a professional option for making temporary repairs to any tubeless tire punctures that occur on the road.",
        amount: 1
    },
    {
        id: 29,
        img: "https://m.media-amazon.com/images/I/71bh+Q2lyaL.jpg",
        productName: "Mounted Wire Wheel Brush Carbon Steel Coarse",
        price: 4.99,
        bundlePrice: "(item is only sold individually)",
        category: "Tools",
        subCategory: "abrasive-tools",
        description: "Abrasive power brush is designed to work with die grinders to ensure seamless surface cleaning and material removal. This finishing brush features crimped wires with high density for maximum brushing action.",
        amount: 1
    },
    {
        id: 30,
        img: "https://i5.walmartimages.com/asr/15d7843f-7a9b-4bf2-9707-c6dc845d80e1.6b56103544a5016d12befb391c6d62c8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        productName: "Black Pressure Gauge",
        price: 29.99,
        bundlePrice: "(item is only sold individually)",
        category: "Tools",
        subCategory: "automotive-tools",
        description: "Dual scale pressure range 60 PSI (410 kPa). Ideal for automobile and light truck service",
        amount: 1
    },
    {
        id: 31,
        img: "https://m.media-amazon.com/images/I/41698a5i-+L._AC_UF894,1000_QL80_.jpg",
        productName: "Blue Pressure Gauge ",
        price: 19.99,
        bundlePrice: "(item is only sold individually)",
        category: "Tools",
        subCategory: "automotive-tools",
        description: "This R134A refrigerant recharge kit is suitable for use with many vehicle or home air conditioning system. With a 1/2 thread for American and Europe, this recharge kit is compatible with most models and delivers highly efficient performance.",
        amount: 1
    },
    {
        id: 32,
        img: "https://m.media-amazon.com/images/I/61CuPmoHzOL.jpg",
        productName: "Trouble Light",
        price: 19.99,
        bundlePrice: "(item is only sold individually)",
        category: "Tools",
        subCategory: "lighting-tools",
        description: "Trouble lights are ideal for work at home, shop, garage, or for emergency repairs on the road.",
        amount: 1
    },
    {
        id: 33,
        img: "https://emzone.ca/wp-content/uploads/2019/10/emzone-brake-cleaner-retail-1000.jpg",
        productName: "Emzone Brake Cleaner",
        price: 4.99,
        bundlePrice: "($60 for 12 cans)",
        category: "Lubricants",
        subCategory: "brake-cleaner",
        description: "Emzone Brake Cleaner is an advanced formulation of cleaning solvents that quickly dissolve and remove grease, oil, brake fluid, road grime and dirt from brake parts, CV joints, disc pads, drums and other components.",
        amount: 1
    },
    {
        id: 34,
        img: "https://apim.canadiantire.ca/v1/product/api/v1/product/image/0380622p?baseStoreId=CTR&lang=en_CA&subscription-key=c01ef3612328420c9f5cd9277e815a0e&imwidth=640&impolicy=mZoom",
        productName: "Power Steering Fluid",
        price: 29.99,
        bundlePrice: "(item is only sold individually)",
        category: "Lubricants",
        subCategory: "brake-fluid",
        description: "Certified Synthetic Power Steering Fluid is designed to keep your power steering systems running smoothly and efficiently. This steering fluid protects against squeals and pump breakdowns, while also extending the life of steering systems with anti-wear additives and lubricants.",
        amount: 1
    },
    {
        id: 35,
        img: "https://partsource.ca/cdn/shop/products/0381910_1_700x700.jpg?v=1680189303",
        productName: "Dot 3 Brake Fluid",
        price: 44.99,
        bundlePrice: "(item is only sold individually)",
        category: "Lubricants",
        subCategory: "brake-fluid",
        description: "OEM DOT 3 Domestic Brake Fluid is designed expressly for use where DOT 3 MOTOR VEHICLE BRAKE FLUID is recommended by the vehicle manufacturer and a higher level of performance is desired.",
        amount: 1
    },
    {
        id: 36,
        img: "https://media-www.canadiantire.ca/product/automotive/auto-maintenance/auto-fluids/0381918/oem-brake-fluid-dot-4-asian-446-degrees-946ml-58df50ac-1efa-432a-ac81-71eaedeb4576.png?im=whresize&wid=142&hei=142",
        productName: "Dot 4 Brake Fluid",
        price: 54.99,
        bundlePrice: "(item is only sold individually)",
        category: "Lubricants",
        subCategory: "brake-fluid",
        description: "OEM DOT 4 Domestic Brake Fluid is formulated expressly for use where DOT 4 MOTOR VEHICLE BRAKE FLUID is recommended by the vehicle manufacturer.",
        amount: 1
    },
    {
        id: 37,
        img: "https://media-www.canadiantire.ca/product/automotive/auto-maintenance/oil-pcmo-/0289066/quaker-state-synthetic-0w20-oil-946-ml-ba0d6a7c-8514-42f7-955e-8f85d7856aa4.png?imdensity=1&imwidth=1244&impolicy=gZoom",
        productName: "Quaker State Full Synthetic SAE 0W-20",
        price: 29.99,
        bundlePrice: "($90 for 3 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Quaker State Full Synthetic 0W-20 motor oil delivers strong engine performance and protection against deposits between oil changes. It can be used in both new and older vehicles, especially high performance vehicles such as sports cars, SUVs, trucks, and minivans.",
        amount: 1
    },
    {
        id: 38,
        img: "https://media-www.canadiantire.ca/product/automotive/auto-maintenance/oil-pcmo-/0289027/quaker-state-synthetic-5w20-oil-946-ml-dexos-compliant--e4611e0e-6b42-4691-810c-319d0871166f.png?imdensity=1&imwidth=1244&impolicy=gZoom",
        productName: "Quaker State Full Synthetic SAE 5W-20",
        price: 29.99,
        bundlePrice: "($90 for 3 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Quaker State Full Synthetic 5W-20 motor oil delivers strong engine performance and protection against deposits between oil changes. It can be used in both new and older vehicles, especially high performance vehicles such as sports cars, SUVs, trucks, and minivans.",
        amount: 1
    },
    {
        id: 39,
        img: "https://media-www.canadiantire.ca/product/automotive/auto-maintenance/oil-pcmo-/0289029/quaker-state-synthetic-5w30-oil-946-ml-dexos-compliant--e19f1d14-dcb8-45a1-9010-459dceb10dac.png?imdensity=1&imwidth=1244&impolicy=gZoom",
        productName: "Quaker State Full Synthetic SAE 5W-30",
        price: 29.99,
        bundlePrice: "($90 for 3 jugs)",
        category: "Oil",
        subCategory: "engine-oil",
        description: "Quaker State Full Synthetic 5W-30 motor oil delivers strong engine performance and protection against deposits between oil changes. It can be used in both new and older vehicles, especially high performance vehicles such as sports cars, SUVs, trucks, and minivans.",
        amount: 1
    },
    {
        id: 40,
        img: "https://www.mainstreetmower.com/cdn/shop/products/Toro114-4715_2.png?v=1678969012&width=1500",
        productName: "Rustproof Black Pail",
        price: 109.99,
        bundlePrice: "(item is only sold individually)",
        category: "Oil",
        subCategory: "hydraulic-oil",
        description: "This product can only be used with an under coating/rust proofing gun. This is a black Rubberized undercoating",
        amount: 1
    },
    {
        id: 41,
        img: "https://www.partsource.ca/cdn/shop/products/pail_1024x1024.png?v=1678120785",
        productName: "Floor Cleaner White Pail",
        price: 299.99,
        bundlePrice: "(item is only sold individually)",
        category: "Oil",
        subCategory: "hydraulic-oil",
        description: "This industrial-strength, powdered floor cleaner is suitable for use on concrete and tile floors. The white granular powder has a lemon fragrance. This alkaline product comes in a 20-kilogram pail.",
        amount: 1
    },
];

export default data; 