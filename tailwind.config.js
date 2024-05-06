/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
'Aclonica-Regular': ['Aclonica-Regular', 'sans-serif'],
'ArchivoBlack': ['Archivo Black', 'sans-serif'],
'BlackOpsOne-Regular': ['BlackOpsOne-Regular', 'cursive'],
'Caprasimo': ['Caprasimo', 'cursive'],
'Creepster': ['Creepster', 'cursive'],
'DMSerifDisplay': ['DM Serif Display-italic', 'serif'],
'EmilysCandy': ['Emilys Candy', 'cursive'],
'HoltwoodOneSC': ['Holtwood One SC', 'sans-serif'],
'Itim': ['Itim, cursive'],
'Kingthings_Petrock': ['Kingthings_Petrock', 'cursive'],
'Kranky': ['Kranky', 'cursive'],
'LibreBaskerville': ['Libre Baskerville', 'serif'],
"Montserrat": ['Montserrat', 'sans-serif'],
'Noto Serif': ['Noto Serif', 'serif'],
'Noto': ['Noto Sans', 'sans-serif'],
'Nosifer': ['Nosifer', 'cursive'],
'Orbitron': ['Orbitron', 'sans-serif'],
'PermanentMarker': ['Permanent Marker', 'cursive'],
'PT Serif_Bold': ['PT Serif_Bold', 'serif'],
'PT Serif_BoldItalic': ['PT Serif_BoldItalic', 'serif'],
"Rye": ['Rye', 'cursive'], 
'Vollkorn': ['Vollkorn', 'serif'],
'Wallpoet': ['Wallpoet', 'cursive'],
'Sixtyfour': ['Sixtyfour', 'cursive'],
'Changa-Regular': ['Changa-Regular', 'sans-serif'],
'Blackbeard' : ['Blackbeard', 'cursive'],
},

screens: {
  'xxxs': '280px',
  'xxs': '320px',
  'xs': '420px',
  'sm': '460px',
  'md': '685px',
  'lg': '1024px',
  'xl': '1280px',
},

colors: {
  varDARKBEAKTOP: "#785001",
  varMEDBEAKTOP: "#b67902",
  varLIGHTBEAKTOP: "#fca802",
  varDARKDUCKHEAD: "#1e3b28",
  varMEDDUCKHEAD: "#284f35",
  varLIGHTDUCKHEAD: "#528f85",
  varDARKBLUEFEATHER: "#24558d",
  varMEDBLUEFEATHER: "#2a61a1",
  varLIGHTBLUEFEATHER: "#419aff",
  varDARKDUCKCHEEKS: "#362e47",
  varMEDDUCKCHEEKS: "#6b5b8d",
  varLIGHTDUCKCHEEKS: "#a088d2",
  varDARKNECK: "#412a32",
  varMEDNECK: "#98648d",
  varLIGHTNECK: "#c68199",
  varDARKWING: "#3c302e",
  varMEDWING: "#806661",
  varLIGHTWING: "#cfa69d",
  varDARKBEAK: "#70181a",
  varMEDBEAK: "#962023",
  varLIGHTBEAK: "#d72d32",
  varDARKSPACE: "#08121c",
  varMEDSPACE: "#1b3854",
  varLIGHTSPACE: "#264d73", 
  varTEAL: '#008080',
  varDARKGREEN: '#052e16',
  varDARKTEAL: '#006766',
  varLIGHTTEAL: '#4dc4c5',
  varDARKBROWN:'#61472a',
  varBROWN: '#91785d',
  varCRIMSON: '#dc143c',
  varGOLD: '#ffd700',
  varLIME: '#00ff00',
  varINDIGO: '#4b0082',
  varBlUE: '#008080',
  varDARKBLUE: '#000080',
    },









    },
  },
  plugins: [],
}
