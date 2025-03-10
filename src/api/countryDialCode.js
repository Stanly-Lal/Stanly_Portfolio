const countryDialCode = [
    { name: "--Select--", countryCode: "", dialCode: " ", flag: "Co" },
    { name: "Afghanistan", countryCode: "AF", dialCode: "+93", flag: "🇦🇫" },
    { name: "Albania", countryCode: "AL", dialCode: "+355", flag: "🇦🇱" },
    { name: "Algeria", countryCode: "DZ", dialCode: "+213", flag: "🇩🇿" },
    { name: "Andorra", countryCode: "AD", dialCode: "+376", flag: "🇦🇩" },
    { name: "Angola", countryCode: "AO", dialCode: "+244", flag: "🇦🇴" },
    { name: "Antigua and Barbuda", countryCode: "AG", dialCode: "+1-268", flag: "🇦🇬" },
    { name: "Argentina", countryCode: "AR", dialCode: "+54", flag: "🇦🇷" },
    { name: "Armenia", countryCode: "AM", dialCode: "+374", flag: "🇦🇲" },
    { name: "Australia", countryCode: "AU", dialCode: "+61", flag: "🇦🇺" },
    { name: "Austria", countryCode: "AT", dialCode: "+43", flag: "🇦🇹" },
    { name: "Azerbaijan", countryCode: "AZ", dialCode: "+994", flag: "🇦🇿" },
    { name: "Bahamas", countryCode: "BS", dialCode: "+1-242", flag: "🇧🇸" },
    { name: "Bahrain", countryCode: "BH", dialCode: "+973", flag: "🇧🇭" },
    { name: "Bangladesh", countryCode: "BD", dialCode: "+880", flag: "🇧🇩" },
    { name: "Barbados", countryCode: "BB", dialCode: "+1-246", flag: "🇧🇧" },
    { name: "Belarus", countryCode: "BY", dialCode: "+375", flag: "🇧🇾" },
    { name: "Belgium", countryCode: "BE", dialCode: "+32", flag: "🇧🇪" },
    { name: "Belize", countryCode: "BZ", dialCode: "+501", flag: "🇧🇿" },
    { name: "Benin", countryCode: "BJ", dialCode: "+229", flag: "🇧🇯" },
    { name: "Bhutan", countryCode: "BT", dialCode: "+975", flag: "🇧🇹" },
    { name: "Bolivia", countryCode: "BO", dialCode: "+591", flag: "🇧🇴" },
    { name: "Bosnia and Herzegovina", countryCode: "BA", dialCode: "+387", flag: "🇧🇦" },
    { name: "Botswana", countryCode: "BW", dialCode: "+267", flag: "🇧🇼" },
    { name: "Brazil", countryCode: "BR", dialCode: "+55", flag: "🇧🇷" },
    { name: "Brunei", countryCode: "BN", dialCode: "+673", flag: "🇧🇳" },
    { name: "Bulgaria", countryCode: "BG", dialCode: "+359", flag: "🇧🇬" },
    { name: "Burkina Faso", countryCode: "BF", dialCode: "+226", flag: "🇧🇫" },
    { name: "Burundi", countryCode: "BI", dialCode: "+257", flag: "🇧🇮" },
    { name: "Cabo Verde", countryCode: "CV", dialCode: "+238", flag: "🇨🇻" },
    { name: "Cambodia", countryCode: "KH", dialCode: "+855", flag: "🇰🇭" },
    { name: "Cameroon", countryCode: "CM", dialCode: "+237", flag: "🇨🇲" },
    { name: "Canada", countryCode: "CA", dialCode: "+1", flag: "🇨🇦" },
    { name: "Central African Republic", countryCode: "CF", dialCode: "+236", flag: "🇨🇫" },
    { name: "Chad", countryCode: "TD", dialCode: "+235", flag: "🇹🇩" },
    { name: "Chile", countryCode: "CL", dialCode: "+56", flag: "🇨🇱" },
    { name: "China", countryCode: "CN", dialCode: "+86", flag: "🇨🇳" },
    { name: "Colombia", countryCode: "CO", dialCode: "+57", flag: "🇨🇴" },
    { name: "Comoros", countryCode: "KM", dialCode: "+269", flag: "🇰🇲" },
    { name: "Congo (Congo-Brazzaville)", countryCode: "CG", dialCode: "+242", flag: "🇨🇬" },
    { name: "Congo (Congo-Kinshasa)", countryCode: "CD", dialCode: "+243", flag: "🇨🇩" },
    { name: "Costa Rica", countryCode: "CR", dialCode: "+506", flag: "🇨🇷" },
    { name: "Croatia", countryCode: "HR", dialCode: "+385", flag: "🇭🇷" },
    { name: "Cuba", countryCode: "CU", dialCode: "+53", flag: "🇨🇺" },
    { name: "Cyprus", countryCode: "CY", dialCode: "+357", flag: "🇨🇾" },
    { name: "Czech Republic", countryCode: "CZ", dialCode: "+420", flag: "🇨🇿" },
    { name: "Denmark", countryCode: "DK", dialCode: "+45", flag: "🇩🇰" },
    { name: "Djibouti", countryCode: "DJ", dialCode: "+253", flag: "🇩🇯" },
    { name: "Dominica", countryCode: "DM", dialCode: "+1-767", flag: "🇩🇲" },
    { name: "Dominican Republic", countryCode: "DO", dialCode: "+1-809", flag: "🇩🇴" },
    { name: "Ecuador", countryCode: "EC", dialCode: "+593", flag: "🇪🇨" },
    { name: "Egypt", countryCode: "EG", dialCode: "+20", flag: "🇪🇬" },
    { name: "El Salvador", countryCode: "SV", dialCode: "+503", flag: "🇸🇻" },
    { name: "Equatorial Guinea", countryCode: "GQ", dialCode: "+240", flag: "🇬🇶" },
    { name: "Eritrea", countryCode: "ER", dialCode: "+291", flag: "🇪🇷" },
    { name: "Estonia", countryCode: "EE", dialCode: "+372", flag: "🇪🇪" },
    { name: "Eswatini", countryCode: "SZ", dialCode: "+268", flag: "🇸🇿" },
    { name: "Ethiopia", countryCode: "ET", dialCode: "+251", flag: "🇪🇹" },
    { name: "Fiji", countryCode: "FJ", dialCode: "+679", flag: "🇫🇯" },
    { name: "Finland", countryCode: "FI", dialCode: "+358", flag: "🇫🇮" },
    { name: "France", countryCode: "FR", dialCode: "+33", flag: "🇫🇷" },
    { name: "Gabon", countryCode: "GA", dialCode: "+241", flag: "🇬🇦" },
    { name: "Gambia", countryCode: "GM", dialCode: "+220", flag: "🇬🇲" },
    { name: "Georgia", countryCode: "GE", dialCode: "+995", flag: "🇬🇪" },
    { name: "Germany", countryCode: "DE", dialCode: "+49", flag: "🇩🇪" },
    { name: "Ghana", countryCode: "GH", dialCode: "+233", flag: "🇬🇭" },
    { name: "Greece", countryCode: "GR", dialCode: "+30", flag: "🇬🇷" },
    { name: "Grenada", countryCode: "GD", dialCode: "+1-473", flag: "🇬🇩" },
    { name: "Guatemala", countryCode: "GT", dialCode: "+502", flag: "🇬🇹" },
    { name: "Guinea", countryCode: "GN", dialCode: "+224", flag: "🇬🇳" },
    { name: "Guinea-Bissau", countryCode: "GW", dialCode: "+245", flag: "🇬🇼" },
    { name: "Guyana", countryCode: "GY", dialCode: "+592", flag: "🇬🇾" },
    { name: "Haiti", countryCode: "HT", dialCode: "+509", flag: "🇭🇹" },
    { name: "Honduras", countryCode: "HN", dialCode: "+504", flag: "🇭🇳" },
    { name: "Hungary", countryCode: "HU", dialCode: "+36", flag: "🇭🇺" },
    { name: "Iceland", countryCode: "IS", dialCode: "+354", flag: "🇮🇸" },
    { name: "India", countryCode: "IN (Default)", dialCode: "+91", flag: "🇮🇳" },
    { name: "Indonesia", countryCode: "ID", dialCode: "+62", flag: "🇮🇩" },
    { name: "Iran", countryCode: "IR", dialCode: "+98", flag: "🇮🇷" },
    { name: "Iraq", countryCode: "IQ", dialCode: "+964", flag: "🇮🇶" },
    { name: "Ireland", countryCode: "IE", dialCode: "+353", flag: "🇮🇪" },
    { name: "Israel", countryCode: "IL", dialCode: "+972", flag: "🇮🇱" },
    { name: "Italy", countryCode: "IT", dialCode: "+39", flag: "🇮🇹" },
    { name: "Jamaica", countryCode: "JM", dialCode: "+1-876", flag: "🇯🇲" },
    { name: "Japan", countryCode: "JP", dialCode: "+81", flag: "🇯🇵" },
    { name: "Jordan", countryCode: "JO", dialCode: "+962", flag: "🇯🇴" },
    { name: "Kazakhstan", countryCode: "KZ", dialCode: "+7", flag: "🇰🇿" },
    { name: "Kenya", countryCode: "KE", dialCode: "+254", flag: "🇰🇪" },
    { name: "Kiribati", countryCode: "KI", dialCode: "+686", flag: "🇰🇮" },
    { name: "Kuwait", countryCode: "KW", dialCode: "+965", flag: "🇰🇼" },
    { name: "Kyrgyzstan", countryCode: "KG", dialCode: "+996", flag: "🇰🇬" },
    { name: "Laos", countryCode: "LA", dialCode: "+856", flag: "🇱🇦" },
    { name: "Latvia", countryCode: "LV", dialCode: "+371", flag: "🇱🇻" },
    { name: "Lebanon", countryCode: "LB", dialCode: "+961", flag: "🇱🇧" },
    { name: "Lesotho", countryCode: "LS", dialCode: "+266", flag: "🇱🇸" },
    { name: "Liberia", countryCode: "LR", dialCode: "+231", flag: "🇱🇷" },
    { name: "Libya", countryCode: "LY", dialCode: "+218", flag: "🇱🇾" },
    { name: "Liechtenstein", countryCode: "LI", dialCode: "+423", flag: "🇱🇮" },
    { name: "Lithuania", countryCode: "LT", dialCode: "+370", flag: "🇱🇹" },
    { name: "Luxembourg", countryCode: "LU", dialCode: "+352", flag: "🇱🇺" },
    { name: "Madagascar", countryCode: "MG", dialCode: "+261", flag: "🇲🇬" },
    { name: "Malawi", countryCode: "MW", dialCode: "+265", flag: "🇲🇼" },
    { name: "Malaysia", countryCode: "MY", dialCode: "+60", flag: "🇲🇾" },
    { name: "Maldives", countryCode: "MV", dialCode: "+960", flag: "🇲🇻" },
    { name: "Mali", countryCode: "ML", dialCode: "+223", flag: "🇲🇱" },
    { name: "Malta", countryCode: "MT", dialCode: "+356", flag: "🇲🇹" },
    { name: "Marshall Islands", countryCode: "MH", dialCode: "+692", flag: "🇲🇭" },
    { name: "Mauritania", countryCode: "MR", dialCode: "+222", flag: "🇲🇷" },
    { name: "Mauritius", countryCode: "MU", dialCode: "+230", flag: "🇲🇺" },
    { name: "Mexico", countryCode: "MX", dialCode: "+52", flag: "🇲🇽" },
    { name: "Micronesia", countryCode: "FM", dialCode: "+691", flag: "🇫🇲" },
    { name: "Moldova", countryCode: "MD", dialCode: "+373", flag: "🇲🇩" },
    { name: "Monaco", countryCode: "MC", dialCode: "+377", flag: "🇲🇨" },
    { name: "Mongolia", countryCode: "MN", dialCode: "+976", flag: "🇲🇳" },
    { name: "Montenegro", countryCode: "ME", dialCode: "+382", flag: "🇲🇪" },
    { name: "Morocco", countryCode: "MA", dialCode: "+212", flag: "🇲🇦" },
    { name: "Mozambique", countryCode: "MZ", dialCode: "+258", flag: "🇲🇿" },
    { name: "Myanmar (Burma)", countryCode: "MM", dialCode: "+95", flag: "🇲🇲" },
    { name: "Namibia", countryCode: "NA", dialCode: "+264", flag: "🇳🇦" },
    { name: "Nauru", countryCode: "NR", dialCode: "+674", flag: "🇳🇷" },
    { name: "Nepal", countryCode: "NP", dialCode: "+977", flag: "🇳🇵" },
    { name: "Netherlands", countryCode: "NL", dialCode: "+31", flag: "🇳🇱" },
    { name: "New Zealand", countryCode: "NZ", dialCode: "+64", flag: "🇳🇿" },
    { name: "Nicaragua", countryCode: "NI", dialCode: "+505", flag: "🇳🇮" },
    { name: "Niger", countryCode: "NE", dialCode: "+227", flag: "🇳🇪" },
    { name: "Nigeria", countryCode: "NG", dialCode: "+234", flag: "🇳🇬" },
    { name: "North Korea", countryCode: "KP", dialCode: "+850", flag: "🇰🇵" },
    { name: "North Macedonia", countryCode: "MK", dialCode: "+389", flag: "🇲🇰" },
    { name: "Norway", countryCode: "NO", dialCode: "+47", flag: "🇳🇴" },
    { name: "Oman", countryCode: "OM", dialCode: "+968", flag: "🇴🇲" },
    { name: "Pakistan", countryCode: "PK", dialCode: "+92", flag: "🇵🇰" },
    { name: "Palau", countryCode: "PW", dialCode: "+680", flag: "🇵🇼" },
    { name: "Panama", countryCode: "PA", dialCode: "+507", flag: "🇵🇦" },
    { name: "Papua New Guinea", countryCode: "PG", dialCode: "+675", flag: "🇵🇬" },
    { name: "Paraguay", countryCode: "PY", dialCode: "+595", flag: "🇵🇾" },
    { name: "Peru", countryCode: "PE", dialCode: "+51", flag: "🇵🇪" },
    { name: "Philippines", countryCode: "PH", dialCode: "+63", flag: "🇵🇭" },
    { name: "Poland", countryCode: "PL", dialCode: "+48", flag: "🇵🇱" },
    { name: "Portugal", countryCode: "PT", dialCode: "+351", flag: "🇵🇹" },
    { name: "Qatar", countryCode: "QA", dialCode: "+974", flag: "🇶🇦" },
    { name: "Romania", countryCode: "RO", dialCode: "+40", flag: "🇷🇴" },
    { name: "Russia", countryCode: "RU", dialCode: "+7", flag: "🇷🇺" },
    { name: "Rwanda", countryCode: "RW", dialCode: "+250", flag: "🇷🇼" },
    { name: "Saint Kitts and Nevis", countryCode: "KN", dialCode: "+1-869", flag: "🇰🇳" },
    { name: "Saint Lucia", countryCode: "LC", dialCode: "+1-758", flag: "🇱🇨" },
    { name: "Saint Vincent and the Grenadines", countryCode: "VC", dialCode: "+1-784", flag: "🇻🇨" },
    { name: "Samoa", countryCode: "WS", dialCode: "+685", flag: "🇼🇸" },
    { name: "San Marino", countryCode: "SM", dialCode: "+378", flag: "🇸🇲" },
    { name: "Sao Tome and Principe", countryCode: "ST", dialCode: "+239", flag: "🇸🇹" },
    { name: "Saudi Arabia", countryCode: "SA", dialCode: "+966", flag: "🇸🇦" },
    { name: "Senegal", countryCode: "SN", dialCode: "+221", flag: "🇸🇳" },
    { name: "Serbia", countryCode: "RS", dialCode: "+381", flag: "🇷🇸" },
    { name: "Seychelles", countryCode: "SC", dialCode: "+248", flag: "🇸🇨" },
    { name: "Sierra Leone", countryCode: "SL", dialCode: "+232", flag: "🇸🇱" },
    { name: "Singapore", countryCode: "SG", dialCode: "+65", flag: "🇸🇬" },
    { name: "Slovakia", countryCode: "SK", dialCode: "+421", flag: "🇸🇰" },
    { name: "Slovenia", countryCode: "SI", dialCode: "+386", flag: "🇸🇮" },
    { name: "Solomon Islands", countryCode: "SB", dialCode: "+677", flag: "🇸🇧" },
    { name: "Somalia", countryCode: "SO", dialCode: "+252", flag: "🇸🇴" },
    { name: "South Africa", countryCode: "ZA", dialCode: "+27", flag: "🇿🇦" },
    { name: "South Korea", countryCode: "KR", dialCode: "+82", flag: "🇰🇷" },
    { name: "South Sudan", countryCode: "SS", dialCode: "+211", flag: "🇸🇸" },
    { name: "Spain", countryCode: "ES", dialCode: "+34", flag: "🇪🇸" },
    { name: "Sri Lanka", countryCode: "LK", dialCode: "+94", flag: "🇱🇰" },
    { name: "Sudan", countryCode: "SD", dialCode: "+249", flag: "🇸🇩" },
    { name: "Suriname", countryCode: "SR", dialCode: "+597", flag: "🇸🇷" },
    { name: "Sweden", countryCode: "SE", dialCode: "+46", flag: "🇸🇪" },
    { name: "Switzerland", countryCode: "CH", dialCode: "+41", flag: "🇨🇭" },
    { name: "Syria", countryCode: "SY", dialCode: "+963", flag: "🇸🇾" },
    { name: "Taiwan", countryCode: "TW", dialCode: "+886", flag: "🇹🇼" },
    { name: "Tajikistan", countryCode: "TJ", dialCode: "+992", flag: "🇹🇯" },
    { name: "Tanzania", countryCode: "TZ", dialCode: "+255", flag: "🇹🇿" },
    { name: "Thailand", countryCode: "TH", dialCode: "+66", flag: "🇹🇭" },
    { name: "Timor-Leste", countryCode: "TL", dialCode: "+670", flag: "🇹🇱" },
    { name: "Togo", countryCode: "TG", dialCode: "+228", flag: "🇹🇬" },
    { name: "Tonga", countryCode: "TO", dialCode: "+676", flag: "🇹🇴" },
    { name: "Trinidad and Tobago", countryCode: "TT", dialCode: "+1-868", flag: "🇹🇹" },
    { name: "Tunisia", countryCode: "TN", dialCode: "+216", flag: "🇹🇳" },
    { name: "Turkey", countryCode: "TR", dialCode: "+90", flag: "🇹🇷" },
    { name: "Turkmenistan", countryCode: "TM", dialCode: "+993", flag: "🇹🇲" },
    { name: "Tuvalu", countryCode: "TV", dialCode: "+688", flag: "🇹🇻" },
    { name: "Uganda", countryCode: "UG", dialCode: "+256", flag: "🇺🇬" },
    { name: "Ukraine", countryCode: "UA", dialCode: "+380", flag: "🇺🇦" },
    { name: "United Arab Emirates", countryCode: "AE", dialCode: "+971", flag: "🇦🇪" },
    { name: "United Kingdom", countryCode: "GB", dialCode: "+44", flag: "🇬🇧" },
    { name: "United States", countryCode: "US", dialCode: "+1", flag: "🇺🇸" },
    { name: "Uruguay", countryCode: "UY", dialCode: "+598", flag: "🇺🇾" },
    { name: "Uzbekistan", countryCode: "UZ", dialCode: "+998", flag: "🇺🇿" },
    { name: "Vanuatu", countryCode: "VU", dialCode: "+678", flag: "🇻🇺" },
    { name: "Vatican City", countryCode: "VA", dialCode: "+379", flag: "🇻🇦" },
    { name: "Venezuela", countryCode: "VE", dialCode: "+58", flag: "🇻🇪" },
    { name: "Vietnam", countryCode: "VN", dialCode: "+84", flag: "🇻🇳" },
    { name: "Yemen", countryCode: "YE", dialCode: "+967", flag: "🇾🇪" },
    { name: "Zambia", countryCode: "ZM", dialCode: "+260", flag: "🇿🇲" },
    { name: "Zimbabwe", countryCode: "ZW", dialCode: "+263", flag: "🇿🇼" }
  ]
  

export default countryDialCode;
  