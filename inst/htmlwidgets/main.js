setTimeout(function() {

  console.log("Main init")

  const table = [
    'AF', 'Afghanistan', (Math.random() * 1000).toFixed(0), 1, 1,
    'AL', 'Albania', (Math.random() * 1000).toFixed(0), 2, 1,
    'DZ', 'Algeria', (Math.random() * 1000).toFixed(0), 3, 1,
    'AD', 'Andorra', (Math.random() * 1000).toFixed(0), 4, 1,
    'AO', 'Angola', (Math.random() * 1000).toFixed(0), 5, 1,
    'AG', 'Antigua and Barbuda', (Math.random() * 1000).toFixed(0), 6, 1,
    'AR', 'Argentina', (Math.random() * 1000).toFixed(0), 7, 1,
    'AM', 'Armenia', (Math.random() * 1000).toFixed(0), 8, 1,
    'AU', 'Australia', (Math.random() * 1000).toFixed(0), 9, 1,
    'AT', 'Austria', (Math.random() * 1000).toFixed(0), 10, 1,
    'AZ', 'Azerbaijan', (Math.random() * 1000).toFixed(0), 11, 1,
    'BS', 'Bahamas', (Math.random() * 1000).toFixed(0), 12, 1,
    'BH', 'Bahrain', (Math.random() * 1000).toFixed(0), 13, 1,
    'BD', 'Bangladesh', (Math.random() * 1000).toFixed(0), 14, 1,
    'BB', 'Barbados', (Math.random() * 1000).toFixed(0), 15, 1,
    'BY', 'Belarus', (Math.random() * 1000).toFixed(0), 16, 1,
    'BE', 'Belgium', (Math.random() * 1000).toFixed(0), 17, 1,
    'BZ', 'Belize', (Math.random() * 1000).toFixed(0), 18, 1,
    'BJ', 'Benin', (Math.random() * 1000).toFixed(0), 19, 1,
    'BT', 'Bhutan', (Math.random() * 1000).toFixed(0), 20, 1,
    'BO', 'Bolivia', (Math.random() * 1000).toFixed(0), 1, 2,
    'BA', 'Bosnia and Herzegovina', (Math.random() * 1000).toFixed(0), 2, 2,
    'BW', 'Botswana', (Math.random() * 1000).toFixed(0), 3, 2,
    'BR', 'Brazil', (Math.random() * 1000).toFixed(0), 4, 2,
    'BN', 'Brunei', (Math.random() * 1000).toFixed(0), 5, 2,
    'BG', 'Bulgaria', (Math.random() * 1000).toFixed(0), 6, 2,
    'BF', 'Burkina Faso', (Math.random() * 1000).toFixed(0), 7, 2,
    'BI', 'Burundi', (Math.random() * 1000).toFixed(0), 8, 2,
    'CV', 'Cabo Verde', (Math.random() * 1000).toFixed(0), 9, 2,
    'KH', 'Cambodia', (Math.random() * 1000).toFixed(0), 10, 2,
    'CM', 'Cameroon', (Math.random() * 1000).toFixed(0), 11, 2,
    'CA', 'Canada', (Math.random() * 1000).toFixed(0), 12, 2,
    'CF', 'Central African Republic', (Math.random() * 1000).toFixed(0), 13, 2,
    'TD', 'Chad', (Math.random() * 1000).toFixed(0), 14, 2,
    'CL', 'Chile', (Math.random() * 1000).toFixed(0), 15, 2,
    'CN', 'China', (Math.random() * 1000).toFixed(0), 16, 2,
    'CO', 'Colombia', (Math.random() * 1000).toFixed(0), 17, 2,
    'KM', 'Comoros', (Math.random() * 1000).toFixed(0), 18, 2,
    'CD', 'Congo, Democratic Republic of the', (Math.random() * 1000).toFixed(0), 19, 2,
    'CG', 'Congo, Republic of the', (Math.random() * 1000).toFixed(0), 20, 2,
    'CR', 'Costa Rica', (Math.random() * 1000).toFixed(0), 1, 3,
    'HR', 'Croatia', (Math.random() * 1000).toFixed(0), 2, 3,
    'CU', 'Cuba', (Math.random() * 1000).toFixed(0), 3, 3,
    'CY', 'Cyprus', (Math.random() * 1000).toFixed(0), 4, 3,
    'CZ', 'Czechia', (Math.random() * 1000).toFixed(0), 5, 3,
    'DK', 'Denmark', (Math.random() * 1000).toFixed(0), 6, 3,
    'DJ', 'Djibouti', (Math.random() * 1000).toFixed(0), 7, 3,
    'DM', 'Dominica', (Math.random() * 1000).toFixed(0), 8, 3,
    'DO', 'Dominican Republic', (Math.random() * 1000).toFixed(0), 9, 3,
    'EC', 'Ecuador', (Math.random() * 1000).toFixed(0), 10, 3,
    'EG', 'Egypt', (Math.random() * 1000).toFixed(0), 11, 3,
    'SV', 'El Salvador', (Math.random() * 1000).toFixed(0), 12, 3,
    'GQ', 'Equatorial Guinea', (Math.random() * 1000).toFixed(0), 13, 3,
    'ER', 'Eritrea', (Math.random() * 1000).toFixed(0), 14, 3,
    'EE', 'Estonia', (Math.random() * 1000).toFixed(0), 15, 3,
    'SZ', 'Eswatini', (Math.random() * 1000).toFixed(0), 16, 3,
    'ET', 'Ethiopia', (Math.random() * 1000).toFixed(0), 17, 3,
    'FJ', 'Fiji', (Math.random() * 1000).toFixed(0), 18, 3,
    'FI', 'Finland', (Math.random() * 1000).toFixed(0), 19, 3,
    'FR', 'France', (Math.random() * 1000).toFixed(0), 20, 3,
    'GA', 'Gabon', (Math.random() * 1000).toFixed(0), 1, 4,
    'GM', 'Gambia', (Math.random() * 1000).toFixed(0), 2, 4,
    'GE', 'Georgia', (Math.random() * 1000).toFixed(0), 3, 4,
    'DE', 'Germany', (Math.random() * 1000).toFixed(0), 4, 4,
    'GH', 'Ghana', (Math.random() * 1000).toFixed(0), 5, 4,
    'GR', 'Greece', (Math.random() * 1000).toFixed(0), 6, 4,
    'GD', 'Grenada', (Math.random() * 1000).toFixed(0), 7, 4,
    'GT', 'Guatemala', (Math.random() * 1000).toFixed(0), 8, 4,
    'GN', 'Guinea', (Math.random() * 1000).toFixed(0), 9, 4,
    'GW', 'Guinea-Bissau', (Math.random() * 1000).toFixed(0), 10, 4,
    'GY', 'Guyana', (Math.random() * 1000).toFixed(0), 11, 4,
    'HT', 'Haiti', (Math.random() * 1000).toFixed(0), 12, 4,
    'HN', 'Honduras', (Math.random() * 1000).toFixed(0), 13, 4,
    'HU', 'Hungary', (Math.random() * 1000).toFixed(0), 14, 4,
    'IS', 'Iceland', (Math.random() * 1000).toFixed(0), 15, 4,
    'IN', 'India', (Math.random() * 1000).toFixed(0), 16, 4,
    'ID', 'Indonesia', (Math.random() * 1000).toFixed(0), 17, 4,
    'IR', 'Iran', (Math.random() * 1000).toFixed(0), 18, 4,
    'IQ', 'Iraq', (Math.random() * 1000).toFixed(0), 19, 4,
    'IE', 'Ireland', (Math.random() * 1000).toFixed(0), 20, 4,
    'IL', 'Israel', (Math.random() * 1000).toFixed(0), 1, 5,
    'IT', 'Italy', (Math.random() * 1000).toFixed(0), 2, 5,
    'JM', 'Jamaica', (Math.random() * 1000).toFixed(0), 3, 5,
    'JP', 'Japan', (Math.random() * 1000).toFixed(0), 4, 5,
    'JO', 'Jordan', (Math.random() * 1000).toFixed(0), 5, 5,
    'KZ', 'Kazakhstan', (Math.random() * 1000).toFixed(0), 6, 5,
    'KE', 'Kenya', (Math.random() * 1000).toFixed(0), 7, 5,
    'KI', 'Kiribati', (Math.random() * 1000).toFixed(0), 8, 5,
    'KP', 'Korea, North', (Math.random() * 1000).toFixed(0), 9, 5,
    'KR', 'Korea, South', (Math.random() * 1000).toFixed(0), 10, 5,
    'KW', 'Kuwait', (Math.random() * 1000).toFixed(0), 11, 5,
    'KG', 'Kyrgyzstan', (Math.random() * 1000).toFixed(0), 12, 5,
    'LA', 'Laos', (Math.random() * 1000).toFixed(0), 13, 5,
    'LV', 'Latvia', (Math.random() * 1000).toFixed(0), 14, 5,
    'LB', 'Lebanon', (Math.random() * 1000).toFixed(0), 15, 5,
    'LS', 'Lesotho', (Math.random() * 1000).toFixed(0), 16, 5,
    'LR', 'Liberia', (Math.random() * 1000).toFixed(0), 17, 5,
    'LY', 'Libya', (Math.random() * 1000).toFixed(0), 18, 5,
    'LI', 'Liechtenstein', (Math.random() * 1000).toFixed(0), 19, 5,
    'LT', 'Lithuania', (Math.random() * 1000).toFixed(0), 20, 5,
    'LU', 'Luxembourg', (Math.random() * 1000).toFixed(0), 1, 6,
    'MG', 'Madagascar', (Math.random() * 1000).toFixed(0), 2, 6,
    'MW', 'Malawi', (Math.random() * 1000).toFixed(0), 3, 6,
    'MY', 'Malaysia', (Math.random() * 1000).toFixed(0), 4, 6,
    'MV', 'Maldives', (Math.random() * 1000).toFixed(0), 5, 6,
    'ML', 'Mali', (Math.random() * 1000).toFixed(0), 6, 6,
    'MT', 'Malta', (Math.random() * 1000).toFixed(0), 7, 6,
    'MH', 'Marshall Islands', (Math.random() * 1000).toFixed(0), 8, 6,
    'MR', 'Mauritania', (Math.random() * 1000).toFixed(0), 9, 6,
    'MU', 'Mauritius', (Math.random() * 1000).toFixed(0), 10, 6,
    'MX', 'Mexico', (Math.random() * 1000).toFixed(0), 11, 6,
    'FM', 'Micronesia', (Math.random() * 1000).toFixed(0), 12, 6,
    'MD', 'Moldova', (Math.random() * 1000).toFixed(0), 13, 6,
    'MC', 'Monaco', (Math.random() * 1000).toFixed(0), 14, 6,
    'MN', 'Mongolia', (Math.random() * 1000).toFixed(0), 15, 6,
    'ME', 'Montenegro', (Math.random() * 1000).toFixed(0), 16, 6,
    'MA', 'Morocco', (Math.random() * 1000).toFixed(0), 17, 6,
    'MZ', 'Mozambique', (Math.random() * 1000).toFixed(0), 18, 6,
    'MM', 'Myanmar', (Math.random() * 1000).toFixed(0), 19, 6,
    'NA', 'Namibia', (Math.random() * 1000).toFixed(0), 20, 6,
    'NR', 'Nauru', (Math.random() * 1000).toFixed(0), 1, 7,
    'NP', 'Nepal', (Math.random() * 1000).toFixed(0), 2, 7,
    'NL', 'Netherlands', (Math.random() * 1000).toFixed(0), 3, 7,
    'NZ', 'New Zealand', (Math.random() * 1000).toFixed(0), 4, 7,
    'NI', 'Nicaragua', (Math.random() * 1000).toFixed(0), 5, 7,
    'NE', 'Niger', (Math.random() * 1000).toFixed(0), 6, 7,
    'NG', 'Nigeria', (Math.random() * 1000).toFixed(0), 7, 7,
    'MK', 'North Macedonia', (Math.random() * 1000).toFixed(0), 8, 7,
    'NO', 'Norway', (Math.random() * 1000).toFixed(0), 9, 7,
    'OM', 'Oman', (Math.random() * 1000).toFixed(0), 10, 7,
    'PK', 'Pakistan', (Math.random() * 1000).toFixed(0), 11, 7,
    'PW', 'Palau', (Math.random() * 1000).toFixed(0), 12, 7,
    'PA', 'Panama', (Math.random() * 1000).toFixed(0), 13, 7,
    'PG', 'Papua New Guinea', (Math.random() * 1000).toFixed(0), 14, 7,
    'PY', 'Paraguay', (Math.random() * 1000).toFixed(0), 15, 7,
    'PE', 'Peru', (Math.random() * 1000).toFixed(0), 16, 7,
    'PH', 'Philippines', (Math.random() * 1000).toFixed(0), 17, 7,
    'PL', 'Poland', (Math.random() * 1000).toFixed(0), 18, 7,
    'PT', 'Portugal', (Math.random() * 1000).toFixed(0), 19, 7,
    'QA', 'Qatar', (Math.random() * 1000).toFixed(0), 20, 7,
    'RO', 'Romania', (Math.random() * 1000).toFixed(0), 1, 8,
    'RU', 'Russia', (Math.random() * 1000).toFixed(0), 2, 8,
    'RW', 'Rwanda', (Math.random() * 1000).toFixed(0), 3, 8,
    'KN', 'Saint Kitts and Nevis', (Math.random() * 1000).toFixed(0), 4, 8,
    'LC', 'Saint Lucia', (Math.random() * 1000).toFixed(0), 5, 8,
    'VC', 'Saint Vincent and the Grenadines', (Math.random() * 1000).toFixed(0), 6, 8,
    'WS', 'Samoa', (Math.random() * 1000).toFixed(0), 7, 8,
    'SM', 'San Marino', (Math.random() * 1000).toFixed(0), 8, 8,
    'ST', 'Sao Tome and Principe', (Math.random() * 1000).toFixed(0), 9, 8,
    'SA', 'Saudi Arabia', (Math.random() * 1000).toFixed(0), 10, 8,
    'SN', 'Senegal', (Math.random() * 1000).toFixed(0), 11, 8,
    'RS', 'Serbia', (Math.random() * 1000).toFixed(0), 12, 8,
    'SC', 'Seychelles', (Math.random() * 1000).toFixed(0), 13, 8,
    'SL', 'Sierra Leone', (Math.random() * 1000).toFixed(0), 14, 8,
    'SG', 'Singapore', (Math.random() * 1000).toFixed(0), 15, 8,
    'SK', 'Slovakia', (Math.random() * 1000).toFixed(0), 16, 8,
    'SI', 'Slovenia', (Math.random() * 1000).toFixed(0), 17, 8,
    'SB', 'Solomon Islands', (Math.random() * 1000).toFixed(0), 18, 8,
    'SO', 'Somalia', (Math.random() * 1000).toFixed(0), 19, 8,
    'ZA', 'South Africa', (Math.random() * 1000).toFixed(0), 20, 8,
    'SS', 'South Sudan', (Math.random() * 1000).toFixed(0), 1, 9,
    'ES', 'Spain', (Math.random() * 1000).toFixed(0), 2, 9,
    'LK', 'Sri Lanka', (Math.random() * 1000).toFixed(0), 3, 9,
    'SD', 'Sudan', (Math.random() * 1000).toFixed(0), 4, 9,
    'SR', 'Suriname', (Math.random() * 1000).toFixed(0), 5, 9,
    'SE', 'Sweden', (Math.random() * 1000).toFixed(0), 6, 9,
    'CH', 'Switzerland', (Math.random() * 1000).toFixed(0), 7, 9,
    'SY', 'Syria', (Math.random() * 1000).toFixed(0), 8, 9,
    'TW', 'Taiwan', (Math.random() * 1000).toFixed(0), 9, 9,
    'TJ', 'Tajikistan', (Math.random() * 1000).toFixed(0), 10, 9,
    'TZ', 'Tanzania', (Math.random() * 1000).toFixed(0), 11, 9,
    'TH', 'Thailand', (Math.random() * 1000).toFixed(0), 12, 9,
    'TL', 'Timor-Leste', (Math.random() * 1000).toFixed(0), 13, 9,
    'TG', 'Togo', (Math.random() * 1000).toFixed(0), 14, 9,
    'TO', 'Tonga', (Math.random() * 1000).toFixed(0), 15, 9,
    'TT', 'Trinidad and Tobago', (Math.random() * 1000).toFixed(0), 16, 9,
    'TN', 'Tunisia', (Math.random() * 1000).toFixed(0), 17, 9,
    'TR', 'Turkey', (Math.random() * 1000).toFixed(0), 18, 9,
    'TM', 'Turkmenistan', (Math.random() * 1000).toFixed(0), 19, 9,
    'TV', 'Tuvalu', (Math.random() * 1000).toFixed(0), 20, 9,
    'UG', 'Uganda', (Math.random() * 1000).toFixed(0), 1, 10,
    'UA', 'Ukraine', (Math.random() * 1000).toFixed(0), 2, 10,
    'AE', 'United Arab Emirates', (Math.random() * 1000).toFixed(0), 3, 10,
    'GB', 'United Kingdom', (Math.random() * 1000).toFixed(0), 4, 10,
    'US', 'United States', (Math.random() * 1000).toFixed(0), 5, 10,
    'UY', 'Uruguay', (Math.random() * 1000).toFixed(0), 6, 10,
    'UZ', 'Uzbekistan', (Math.random() * 1000).toFixed(0), 7, 10,
    'VU', 'Vanuatu', (Math.random() * 1000).toFixed(0), 8, 10,
    'VE', 'Venezuela', (Math.random() * 1000).toFixed(0), 9, 10,
    'VN', 'Vietnam', (Math.random() * 1000).toFixed(0), 10, 10,
    'YE', 'Yemen', (Math.random() * 1000).toFixed(0), 11, 10,
    'ZM', 'Zambia', (Math.random() * 1000).toFixed(0), 12, 10,
    'ZW', 'Zimbabwe', (Math.random() * 1000).toFixed(0), 13, 10
];

const countries = [
    { code: 'AD', name: 'Andorra', area: '468' },
    { code: 'AE', name: 'United Arab Emirates', area: '83600' },
    { code: 'AF', name: 'Afghanistan', area: '652230' },
    { code: 'AG', name: 'Antigua and Barbuda', area: '442' },
    { code: 'AI', name: 'Anguilla', area: '91' },
    { code: 'AL', name: 'Albania', area: '28748' },
    { code: 'AM', name: 'Armenia', area: '29743' },
    { code: 'AO', name: 'Angola', area: '1246700' },
    { code: 'AQ', name: 'Antarctica', area: '14000000' },
    { code: 'AR', name: 'Argentina', area: '2780400' },
    { code: 'AS', name: 'American Samoa', area: '199' },
    { code: 'AT', name: 'Austria', area: '83871' },
    { code: 'AU', name: 'Australia', area: '7692024' },
    { code: 'AW', name: 'Aruba', area: '180' },
    { code: 'AX', name: 'Åland Islands', area: '1552' },
    { code: 'AZ', name: 'Azerbaijan', area: '86600' },
    { code: 'BA', name: 'Bosnia and Herzegovina', area: '51197' },
    { code: 'BB', name: 'Barbados', area: '430' },
    { code: 'BD', name: 'Bangladesh', area: '147570' },
    { code: 'BE', name: 'Belgium', area: '30528' },
    { code: 'BF', name: 'Burkina Faso', area: '272967' },
    { code: 'BG', name: 'Bulgaria', area: '110879' },
    { code: 'BH', name: 'Bahrain', area: '765' },
    { code: 'BI', name: 'Burundi', area: '27834' },
    { code: 'BJ', name: 'Benin', area: '112622' },
    { code: 'BL', name: 'Saint Barthélemy', area: '21' },
    { code: 'BM', name: 'Bermuda', area: '54' },
    { code: 'BN', name: 'Brunei Darussalam', area: '5765' },
    { code: 'BO', name: 'Bolivia (Plurinational State of)', area: '1098581' },
    { code: 'BQ', name: 'Bonaire, Sint Eustatius and Saba', area: '294' },
    { code: 'BR', name: 'Brazil', area: '8515767' },
    { code: 'BS', name: 'Bahamas', area: '13943' },
    { code: 'BT', name: 'Bhutan', area: '38394' },
    { code: 'BV', name: 'Bouvet Island', area: '49' },
    { code: 'BW', name: 'Botswana', area: '582000' },
    { code: 'BY', name: 'Belarus', area: '207600' },
    { code: 'BZ', name: 'Belize', area: '22966' },
    { code: 'CA', name: 'Canada', area: '9984670' },
    { code: 'CC', name: 'Cocos (Keeling) Islands', area: '14' },
    { code: 'CD', name: 'Congo (Democratic Republic of the)', area: '2344858' },
    { code: 'CF', name: 'Central African Republic', area: '622984' },
    { code: 'CG', name: 'Congo', area: '342000' },
    { code: 'CH', name: 'Switzerland', area: '41284' },
    { code: 'CI', name: 'Côte d\'Ivoire', area: '322463' },
    { code: 'CK', name: 'Cook Islands', area: '236' },
    { code: 'CL', name: 'Chile', area: '756102' },
    { code: 'CM', name: 'Cameroon', area: '475442' },
    { code: 'CN', name: 'China', area: '9596961' },
    { code: 'CO', name: 'Colombia', area: '1141748' },
    { code: 'CR', name: 'Costa Rica', area: '51100' },
    { code: 'CU', name: 'Cuba', area: '109884' },
    { code: 'CV', name: 'Cabo Verde', area: '4033' },
    { code: 'CW', name: 'Curaçao', area: '444' },
    { code: 'CX', name: 'Christmas Island', area: '135' },
    { code: 'CY', name: 'Cyprus', area: '9251' },
    { code: 'CZ', name: 'Czech Republic', area: '78865' },
    { code: 'DE', name: 'Germany', area: '357022' },
    { code: 'DJ', name: 'Djibouti', area: '23200' },
    { code: 'DK', name: 'Denmark', area: '43094' },
    { code: 'DM', name: 'Dominica', area: '751' },
    { code: 'DO', name: 'Dominican Republic', area: '48671' },
    { code: 'DZ', name: 'Algeria', area: '2381741' },
    { code: 'EC', name: 'Ecuador', area: '276841' },
    { code: 'EE', name: 'Estonia', area: '45227' },
    { code: 'EG', name: 'Egypt', area: '1002450' },
    { code: 'EH', name: 'Western Sahara', area: '266000' },
    { code: 'ER', name: 'Eritrea', area: '117600' },
    { code: 'ES', name: 'Spain', area: '505992' },
    { code: 'ET', name: 'Ethiopia', area: '1104300' },
    { code: 'FI', name: 'Finland', area: '338424' },
    { code: 'FJ', name: 'Fiji', area: '18272' },
    { code: 'FK', name: 'Falkland Islands (Malvinas)', area: '12173' },
    { code: 'FM', name: 'Micronesia (Federated States of)', area: '702' },
    { code: 'FO', name: 'Faroe Islands', area: '1393' },
    { code: 'FR', name: 'France', area: '551695' },
    { code: 'GA', name: 'Gabon', area: '267668' },
    { code: 'GB', name: 'United Kingdom of Great Britain and Northern Ireland', area: '242900' },
    { code: 'GD', name: 'Grenada', area: '344' },
    { code: 'GE', name: 'Georgia', area: '69700' },
    { code: 'GF', name: 'French Guiana', area: '83534' },
    { code: 'GG', name: 'Guernsey', area: '78' },
    { code: 'GH', name: 'Ghana', area: '238533' },
    { code: 'GI', name: 'Gibraltar', area: '6' },
    { code: 'GL', name: 'Greenland', area: '2166086' },
    { code: 'GM', name: 'Gambia', area: '11295' },
    { code: 'GN', name: 'Guinea', area: '245857' },
    { code: 'GP', name: 'Guadeloupe', area: '1628' },
    { code: 'GQ', name: 'Equatorial Guinea', area: '28051' },
    { code: 'GR', name: 'Greece', area: '131957' },
    { code: 'GS', name: 'South Georgia and the South Sandwich Islands', area: '3903' },
    { code: 'GT', name: 'Guatemala', area: '108889' },
    { code: 'GU', name: 'Guam', area: '544' },
    { code: 'GW', name: 'Guinea-Bissau', area: '36125' },
    { code: 'GY', name: 'Guyana', area: '214969' },
    { code: 'HK', name: 'Hong Kong', area: '1106' },
    { code: 'HM', name: 'Heard Island and McDonald Islands', area: '412' },
    { code: 'HN', name: 'Honduras', area: '112492' },
    { code: 'HR', name: 'Croatia', area: '56594' },
    { code: 'HT', name: 'Haiti', area: '27750' },
    { code: 'HU', name: 'Hungary', area: '93028' },
    { code: 'ID', name: 'Indonesia', area: '1904569' },
    { code: 'IE', name: 'Ireland', area: '70273' },
    { code: 'IL', name: 'Israel', area: '20770' },
    { code: 'IM', name: 'Isle of Man', area: '572' },
    { code: 'IN', name: 'India', area: '3287263' },
    { code: 'IO', name: 'British Indian Ocean Territory', area: '60' },
    { code: 'IQ', name: 'Iraq', area: '438317' },
    { code: 'IR', name: 'Iran (Islamic Republic of)', area: '1648195' },
    { code: 'IS', name: 'Iceland', area: '103000' },
    { code: 'IT', name: 'Italy', area: '301340' },
    { code: 'JE', name: 'Jersey', area: '116' },
    { code: 'JM', name: 'Jamaica', area: '10991' },
    { code: 'JO', name: 'Jordan', area: '89342' },
    { code: 'JP', name: 'Japan', area: '377975' },
    { code: 'KE', name: 'Kenya', area: '580367' },
    { code: 'KG', name: 'Kyrgyzstan', area: '199951' },
    { code: 'KH', name: 'Cambodia', area: '181035' },
    { code: 'KI', name: 'Kiribati', area: '811' },
    { code: 'KM', name: 'Comoros', area: '1862' },
    { code: 'KN', name: 'Saint Kitts and Nevis', area: '261' },
    { code: 'KP', name: 'Korea (Democratic People\'s Republic of)', area: '120538' },
    { code: 'KR', name: 'Korea (Republic of)', area: '100210' },
    { code: 'KW', name: 'Kuwait', area: '17818' },
    { code: 'KY', name: 'Cayman Islands', area: '264' },
    { code: 'KZ', name: 'Kazakhstan', area: '2724900' },
    { code: 'LA', name: 'Lao People\'s Democratic Republic', area: '236800' },
    { code: 'LB', name: 'Lebanon', area: '10452' },
    { code: 'LC', name: 'Saint Lucia', area: '616' },
    { code: 'LI', name: 'Liechtenstein', area: '160' },
    { code: 'LK', name: 'Sri Lanka', area: '65610' },
    { code: 'LR', name: 'Liberia', area: '111369' },
    { code: 'LS', name: 'Lesotho', area: '30355' },
    { code: 'LT', name: 'Lithuania', area: '65300' },
    { code: 'LU', name: 'Luxembourg', area: '2586' },
    { code: 'LV', name: 'Latvia', area: '64559' },
    { code: 'LY', name: 'Libya', area: '1759540' },
    { code: 'MA', name: 'Morocco', area: '446550' },
    { code: 'MC', name: 'Monaco', area: '2' },
    { code: 'MD', name: 'Moldova (Republic of)', area: '33846' },
    { code: 'ME', name: 'Montenegro', area: '13812' },
    { code: 'MF', name: 'Saint Martin (French part)', area: '53' },
    { code: 'MG', name: 'Madagascar', area: '587041' },
    { code: 'MH', name: 'Marshall Islands', area: '181' },
    { code: 'MK', name: 'North Macedonia', area: '25713' },
    { code: 'ML', name: 'Mali', area: '1240192' },
    { code: 'MM', name: 'Myanmar', area: '676578' },
    { code: 'MN', name: 'Mongolia', area: '1564116' },
    { code: 'MO', name: 'Macao', area: '30' },
    { code: 'MP', name: 'Northern Mariana Islands', area: '464' },
    { code: 'MQ', name: 'Martinique', area: '1128' },
    { code: 'MR', name: 'Mauritania', area: '1030700' },
    { code: 'MS', name: 'Montserrat', area: '102' },
    { code: 'MT', name: 'Malta', area: '316' },
    { code: 'MU', name: 'Mauritius', area: '2040' },
    { code: 'MV', name: 'Maldives', area: '298' },
    { code: 'MW', name: 'Malawi', area: '118484' },
    { code: 'MX', name: 'Mexico', area: '1964375' },
    { code: 'MY', name: 'Malaysia', area: '330803' },
    { code: 'MZ', name: 'Mozambique', area: '801590' },
    { code: 'NA', name: 'Namibia', area: '825615' },
    { code: 'NC', name: 'New Caledonia', area: '18575' },
    { code: 'NE', name: 'Niger', area: '1267000' },
    { code: 'NF', name: 'Norfolk Island', area: '36' },
    { code: 'NG', name: 'Nigeria', area: '923768' },
    { code: 'NI', name: 'Nicaragua', area: '130373' },
    { code: 'NL', name: 'Netherlands', area: '41850' },
    { code: 'NO', name: 'Norway', area: '323802' },
    { code: 'NP', name: 'Nepal', area: '147181' },
    { code: 'NR', name: 'Nauru', area: '21' },
    { code: 'NU', name: 'Niue', area: '260' },
    { code: 'NZ', name: 'New Zealand', area: '270467' },
    { code: 'OM', name: 'Oman', area: '309500' },
    { code: 'PA', name: 'Panama', area: '75417' },
    { code: 'PE', name: 'Peru', area: '1285216' },
    { code: 'PF', name: 'French Polynesia', area: '4167' },
    { code: 'PG', name: 'Papua New Guinea', area: '462840' },
    { code: 'PH', name: 'Philippines', area: '342353' },
    { code: 'PK', name: 'Pakistan', area: '881913' },
    { code: 'PL', name: 'Poland', area: '312696' },
    { code: 'PM', name: 'Saint Pierre and Miquelon', area: '242' },
    { code: 'PN', name: 'Pitcairn', area: '47' },
    { code: 'PR', name: 'Puerto Rico', area: '8870' },
    { code: 'PS', name: 'Palestine, State of', area: '6020' },
    { code: 'PT', name: 'Portugal', area: '92090' },
    { code: 'PW', name: 'Palau', area: '459' },
    { code: 'PY', name: 'Paraguay', area: '406752' },
    { code: 'QA', name: 'Qatar', area: '11586' },
    { code: 'RE', name: 'Réunion', area: '2512' },
    { code: 'RO', name: 'Romania', area: '238397' },
    { code: 'RS', name: 'Serbia', area: '88361' },
    { code: 'RU', name: 'Russian Federation', area: '17098242' },
    { code: 'RW', name: 'Rwanda', area: '26338' },
    { code: 'SA', name: 'Saudi Arabia', area: '2149690' },
    { code: 'SB', name: 'Solomon Islands', area: '28896' },
    { code: 'SC', name: 'Seychelles', area: '452' },
    { code: 'SD', name: 'Sudan', area: '1886068' },
    { code: 'SE', name: 'Sweden', area: '450295' },
    { code: 'SG', name: 'Singapore', area: '710' },
    { code: 'SH', name: 'Saint Helena, Ascension and Tristan da Cunha', area: '394' },
    { code: 'SI', name: 'Slovenia', area: '20273' },
    { code: 'SJ', name: 'Svalbard and Jan Mayen', area: '61399' },
    { code: 'SK', name: 'Slovakia', area: '49037' },
    { code: 'SL', name: 'Sierra Leone', area: '71740' },
    { code: 'SM', name: 'San Marino', area: '61' },
    { code: 'SN', name: 'Senegal', area: '196722' },
    { code: 'SO', name: 'Somalia', area: '637657' },
    { code: 'SR', name: 'Suriname', area: '163820' },
    { code: 'SS', name: 'South Sudan', area: '619745' },
    { code: 'ST', name: 'Sao Tome and Principe', area: '964' },
    { code: 'SV', name: 'El Salvador', area: '21041' },
    { code: 'SX', name: 'Sint Maarten (Dutch part)', area: '34' },
    { code: 'SY', name: 'Syrian Arab Republic', area: '185180' },
    { code: 'SZ', name: 'Eswatini', area: '17364' },
    { code: 'TC', name: 'Turks and Caicos Islands', area: '948' },
    { code: 'TD', name: 'Chad', area: '1284000' },
    { code: 'TF', name: 'French Southern Territories', area: '7747' },
    { code: 'TG', name: 'Togo', area: '56785' },
    { code: 'TH', name: 'Thailand', area: '513120' },
    { code: 'TJ', name: 'Tajikistan', area: '143100' },
    { code: 'TK', name: 'Tokelau', area: '12' },
    { code: 'TL', name: 'Timor-Leste', area: '14874' },
    { code: 'TM', name: 'Turkmenistan', area: '488100' },
    { code: 'TN', name: 'Tunisia', area: '163610' },
    { code: 'TO', name: 'Tonga', area: '747' },
    { code: 'TR', name: 'Turkey', area: '783562' },
    { code: 'TT', name: 'Trinidad and Tobago', area: '5130' },
    { code: 'TV', name: 'Tuvalu', area: '26' },
    { code: 'TW', name: 'Taiwan, Province of China', area: '36193' },
    { code: 'TZ', name: 'Tanzania, United Republic of', area: '945087' },
    { code: 'UA', name: 'Ukraine', area: '603500' },
    { code: 'UG', name: 'Uganda', area: '241038' },
    { code: 'UM', name: 'United States Minor Outlying Islands', area: '0' },
    { code: 'US', name: 'United States of America', area: '9629091' },
    { code: 'UY', name: 'Uruguay', area: '181034' },
    { code: 'UZ', name: 'Uzbekistan', area: '447400' },
    { code: 'VA', name: 'Holy See', area: '0.44' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines', area: '389' },
    { code: 'VE', name: 'Venezuela (Bolivarian Republic of)', area: '916445' },
    { code: 'VG', name: 'Virgin Islands (British)', area: '151' },
    { code: 'VI', name: 'Virgin Islands (U.S.)', area: '347' },
    { code: 'VN', name: 'Viet Nam', area: '331212' },
    { code: 'VU', name: 'Vanuatu', area: '12189' },
    { code: 'WF', name: 'Wallis and Futuna', area: '142' },
    { code: 'WS', name: 'Samoa', area: '2842' },
    { code: 'YE', name: 'Yemen', area: '527968' },
    { code: 'YT', name: 'Mayotte', area: '374' },
    { code: 'ZA', name: 'South Africa', area: '1221037' },
    { code: 'ZM', name: 'Zambia', area: '752612' },
    { code: 'ZW', name: 'Zimbabwe', area: '390757' }
];

function getAreaByCountryCode(countryCode) {
    const country = countries.find(c => c.code === countryCode);
    return country ? country.area : 'Area not found';
}



let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], grid: []};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}


function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
    element.style.backgroundColor = 'rgba(127,70,0,' + (Math.random() * 0.5 + 0.25) + ')';
    // element.style.backgroundColor = "rgba(0,127,127, ${Math.random() * 0.5 + 0.25} )";

    let number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
    element.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
    // details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    details.innerHTML = table[i + 1] + '<br>' + getAreaByCountryCode(table[i]) + ' km²';
    element.appendChild(details);

    element.addEventListener('click', ()=>elementClickHandler(i), false);

    return element;
}

function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - 1330;
    object.position.y = -(table[index + 4] * 180) + 990;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}


}, 1000);

