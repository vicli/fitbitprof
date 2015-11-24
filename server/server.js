// Create database objects
Devices.remove({});
if (Devices.find({}).count() === 0) {
    Devices.insert({
        'name' : 'Surge',
        'product_id': '21',
        'cssId':'devices'
    });

    Devices.insert({
        'name': 'Flex',
        'product_id': '17',
        'cssId': 'devices'
    });
}

UserInfo.remove({});
if(UserInfo.find({}).count() === 0){
	UserInfo.insert({
	'user_id' : 'MEGtDQqLrfozjTjt6',
	'email' : 'vli@fitbit.com',
	'name': 'Victoria Li',
	'nickname': '',
	'address': '',
	'about_me': '',
	'gender': 'f',
	'birthday': '06/20/1993',
	'height_ft': '5',
	'height_in': '5',
	'weight': '150',
	'hrt': 'default',
	'length_unit': 'ftin',
	'weight_unit': 'lb',
	'water_unit': 'ml',
	'week_start': 's',
	'clock': '12',
	'timezone':'gmt08'
})
}
