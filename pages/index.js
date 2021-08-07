import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import UseWindowDimensions from '../components/UseWindowDimensions'


export default function Home() {

  const { height, width } = UseWindowDimensions();

  return (
    <div className={styles.container}>
      <Head>
        <title>Fired Pizza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className="header-container" style={{width:'100vw'}}>
          
           <div className={styles.logoNav}>
            <div className={styles.logoContainer} style={{margin:'0 auto', textAlign:'center'}}>
              <svg width="180" height="173" viewBox="0 0 2309 2221" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                <circle cx="1137.79" cy="1128.79" r="974.788" stroke="white" strokeWidth="85"/>
                <circle cx="1138" cy="1129" r="1009" stroke="#DC3131" strokeWidth="10"/>
                <circle cx="1137.5" cy="1128.5" r="931.5" fill="#DC3131"/>
                <path d="M326.045 1025.15H402.345V950.25C402.345 916.65 411.212 890.75 428.945 872.55C446.679 854.35 471.879 845.25 504.545 845.25C513.879 845.25 522.279 845.95 529.745 847.35C537.679 848.284 544.679 849.684 550.745 851.55V897.75C543.279 895.884 536.279 894.484 529.745 893.55C523.679 892.15 516.912 891.45 509.445 891.45C489.845 891.45 475.612 896.35 466.745 906.15C457.879 915.95 453.445 930.884 453.445 950.95V1025.15H550.745V1067.15H453.445V1366.75H402.345V1067.15H326.045V1025.15ZM643.927 941.15C633.661 941.15 624.794 937.65 617.327 930.65C610.327 923.184 606.827 914.317 606.827 904.05C606.827 894.25 610.327 885.85 617.327 878.85C624.794 871.384 633.661 867.65 643.927 867.65C653.727 867.65 662.127 871.384 669.127 878.85C676.594 885.85 680.327 894.25 680.327 904.05C680.327 914.317 676.827 923.184 669.827 930.65C662.827 937.65 654.194 941.15 643.927 941.15ZM669.127 1025.15V1366.75H618.027V1025.15H669.127ZM773.887 1366.75V1025.15H824.987V1094.45C833.853 1070.65 846.453 1052.22 862.787 1039.15C879.587 1025.62 898.72 1018.85 920.187 1018.85C926.253 1018.85 931.853 1019.32 936.987 1020.25C942.12 1020.72 947.253 1021.88 952.387 1023.75V1069.95C946.787 1068.08 940.72 1066.68 934.187 1065.75C928.12 1064.35 922.287 1063.65 916.687 1063.65C895.687 1063.65 877.253 1069.72 861.387 1081.85C845.987 1093.98 833.853 1111.02 824.987 1132.95V1366.75H773.887ZM1280.21 1327.55C1260.61 1342.95 1240.31 1354.38 1219.31 1361.85C1198.31 1369.32 1175.91 1373.05 1152.11 1373.05C1128.31 1373.05 1105.91 1368.62 1084.91 1359.75C1064.37 1350.42 1046.41 1337.82 1031.01 1321.95C1016.07 1306.08 1004.17 1287.42 995.305 1265.95C986.905 1244.02 982.705 1220.68 982.705 1195.95C982.705 1171.22 986.672 1148.12 994.605 1126.65C1003.01 1104.72 1014.44 1086.05 1028.91 1070.65C1043.37 1054.78 1060.41 1042.42 1080.01 1033.55C1099.61 1024.22 1120.84 1019.55 1143.71 1019.55C1166.11 1019.55 1186.87 1023.98 1206.01 1032.85C1225.14 1041.72 1241.71 1053.85 1255.71 1069.25C1269.71 1084.18 1280.67 1102.38 1288.61 1123.85C1296.54 1144.85 1300.51 1167.48 1300.51 1191.75V1207.15H1032.41C1034.74 1241.68 1047.57 1270.62 1070.91 1293.95C1094.24 1316.82 1122.01 1328.25 1154.21 1328.25C1171.94 1328.25 1188.97 1325.22 1205.31 1319.15C1222.11 1312.62 1236.34 1303.98 1248.01 1293.25L1280.21 1327.55ZM1143.01 1063.65C1115.01 1063.65 1090.97 1073.68 1070.91 1093.75C1050.84 1113.82 1038.47 1139.48 1033.81 1170.75H1250.11C1246.37 1139.95 1234.47 1114.52 1214.41 1094.45C1194.81 1073.92 1171.01 1063.65 1143.01 1063.65ZM1639.74 1366.75V1321.25C1626.67 1337.58 1610.8 1350.18 1592.14 1359.05C1573.47 1367.45 1552.94 1371.65 1530.54 1371.65C1508.6 1371.65 1487.84 1367.22 1468.24 1358.35C1449.1 1349.02 1432.54 1336.65 1418.54 1321.25C1404.54 1305.38 1393.34 1286.72 1384.94 1265.25C1377 1243.78 1373.04 1220.92 1373.04 1196.65C1373.04 1171.92 1377 1148.82 1384.94 1127.35C1393.34 1105.88 1404.77 1087.45 1419.24 1072.05C1433.7 1056.18 1450.74 1043.82 1470.34 1034.95C1489.94 1025.62 1510.94 1020.95 1533.34 1020.95C1554.34 1020.95 1573.94 1025.15 1592.14 1033.55C1610.34 1041.48 1626.2 1053.15 1639.74 1068.55V866.25L1690.84 855.75V1366.75H1639.74ZM1423.44 1195.95C1423.44 1233.28 1434.87 1264.55 1457.74 1289.75C1480.6 1314.48 1509.07 1326.85 1543.14 1326.85C1563.2 1326.85 1581.64 1322.88 1598.44 1314.95C1615.24 1307.02 1629 1295.82 1639.74 1281.35V1111.95C1628.54 1097.48 1614.3 1086.28 1597.04 1078.35C1580.24 1069.95 1562.27 1065.75 1543.14 1065.75C1509.07 1065.75 1480.6 1078.12 1457.74 1102.85C1434.87 1127.58 1423.44 1158.62 1423.44 1195.95Z" fill="white"/>
                <path d="M1898.82 1340.73C1878.69 1374.3 1819.73 1377.22 1794.93 1342.19C1794.93 1342.19 1785 1328.87 1785 1308.63C1785 1291.12 1790.42 1276.99 1794.93 1263.39C1798.15 1253.68 1799.3 1238.59 1799.3 1238.59C1815.36 1256.1 1798.43 1272.15 1824.11 1291.12C1813.32 1270.69 1813.78 1253.18 1819.62 1238.59C1825.46 1223.99 1828.03 1223.99 1834.33 1207.94C1841.16 1190.51 1834.33 1170 1834.33 1170C1834.33 1170 1855.66 1180.19 1857.96 1203.56C1860.83 1232.75 1851.84 1242.96 1869.35 1266.31C1866.43 1242.96 1873.41 1225.31 1898.82 1218.16C1891.75 1244.32 1891.24 1266.31 1900.5 1285.28C1909.76 1304.25 1909.2 1323.44 1898.82 1340.73Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="2309" height="2221" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.tagLineDescription}>
              <p>Mobile pizzeria specializing in neapolitan style pizza, specialty cannolis and more</p>
            </div>
          </div>   
          <div className={styles.tagLineBackground}>
              {/*<h1 className={styles.heroTitle}>
                  Welcome to Fired Pizza
                  </h1>*/}              
            </div>   
        </div>
        <div className={styles.whoAreWe}>
          <div className={styles.whoAreWeImg}>
            
{ /*}
            <picture>
            <source srcset="/images/chris-amber-diag-grad.jpg"
                media="(min-width: 427px)" /> 
            </picture>*/ }
            
          { width <626 ? (
             <Image 
             src="/images/chris-and-amber-2.jpg"
             width="966px"
             height="694"
             layout="responsive"
             placeholder="blur"
             />
            
            ) : (
             

              <Image 
              src="/images/chris-amber-diag-grad.jpg"
              width="966px"
              height="694"
              layout="responsive"
              placeholder="blur"
              />
              
            )
          
          }

                     
          </div>
          <div className={styles.whoAreWeWelcomeText}>
            <h3 className="title">Who are we?</h3>
            <p>We are Chris and Amber and we are passionate about serving tasty food in St Francois County.</p>
            <button>Read More</button>
            {/*<p>Width: {width}</p>
            <p>Height: {height}</p>*/}
          </div>
        </div>        

      {/*}  <div className="welcome-container">
          <ul style={{listStyle:'none', display:'flex', justifyContent:'space-between'}}>
            <li style={{margin: '10px'}}>
              <a href="https://www.facebook.com/firedsfc" target="_blank">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#4E6297"/>
                  <path d="M29 13.8186C29 12.3212 27.6788 11 26.1813 11H14.8186C13.3212 11 12 12.3212 12 13.8186V25.1813C12 26.6787 13.3212 28 14.8186 28H20.544V21.5699H18.4301V18.7513H20.544V17.6062C20.544 15.6684 21.9534 13.9948 23.715 13.9948H26.0052V16.8135H23.715C23.4508 16.8135 23.1865 17.0777 23.1865 17.6062V18.7513H26.0052V21.5699H23.1865V28H26.1813C27.6788 28 29 26.6787 29 25.1813V13.8186Z" fill="white"/>
                </svg>
              </a>
            </li>
            <li style={{margin: '10px'}}>
              <a href="https://www.instagram.com/firedsfc/" target="_blank">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="url(#paint0_linear)"/>
                  <path d="M26.5808 12H14.4192C13.0462 12 12 13.0462 12 14.4192V26.5808C12 27.9538 13.0462 29 14.4192 29H26.5808C27.9538 29 29 27.9538 29 26.5808V14.4192C29 13.0462 27.9538 12 26.5808 12ZM20.5 25.6C23.3115 25.6 25.6 23.3769 25.6 20.6962C25.6 20.2385 25.5346 19.7154 25.4038 19.3231H26.8423V26.2538C26.8423 26.5808 26.5808 26.9077 26.1885 26.9077H14.8115C14.4846 26.9077 14.1577 26.6462 14.1577 26.2538V19.2577H15.6615C15.5308 19.7154 15.4654 20.1731 15.4654 20.6308C15.4 23.3769 17.6885 25.6 20.5 25.6ZM20.5 23.6385C18.6692 23.6385 17.2308 22.2 17.2308 20.4346C17.2308 18.6692 18.6692 17.2308 20.5 17.2308C22.3308 17.2308 23.7692 18.6692 23.7692 20.4346C23.7692 22.2654 22.3308 23.6385 20.5 23.6385ZM26.7769 16.6423C26.7769 17.0346 26.45 17.3615 26.0577 17.3615H24.2269C23.8346 17.3615 23.5077 17.0346 23.5077 16.6423V14.8769C23.5077 14.4846 23.8346 14.1577 24.2269 14.1577H26.0577C26.45 14.1577 26.7769 14.4846 26.7769 14.8769V16.6423Z" fill="white"/>
                  <defs>
                  <linearGradient id="paint0_linear" x1="8.5" y1="35.5" x2="35" y2="8" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EEA054"/>
                  <stop offset="0.502762" stop-color="#D64763"/>
                  <stop offset="1" stop-color="#B62A99"/>
                  </linearGradient>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
                */}


        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
  </div>*/}
      </main>

      {/*<footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
</footer>*/}
    </div>
  )
}
