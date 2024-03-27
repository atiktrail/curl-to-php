
$(function()
{
	var emptyOutputMsg = "PHP code will appear here";
	var formattedEmptyOutputMsg = '<span style="color: #777;">'+emptyOutputMsg+'</span>';

	// Hides placeholder text
	$('#input').on('focus', function() {
		if (!$(this).val())
			$('#output').html(formattedEmptyOutputMsg);
	});

	// Shows placeholder text
	$('#input').on('blur', function() {
		if (!$(this).val())
			$('#output').html(formattedEmptyOutputMsg);
	}).blur();

	// Automatically do the conversion
	$('#input').keyup(function()
	{
		var input = $(this).val();
		if (!input)
		{
			$('#output').html(formattedEmptyOutputMsg);
			return;
		}

		try {
			var output = curlToPHP(input);
			if (output) {
				var coloredOutput = hljs.highlight("php", output);
				$('#output').html(coloredOutput.value);
			}
		} catch (e) {
			$('#output').html('<span class="clr-red">'+e+'</span>');
		}
	});

	// Highlights the output for the user
	$('#output').click(function()
	{
		if (document.selection)
		{
			var range = document.body.createTextRange();
			range.moveToElementText(this);
			range.select();
		}
		else if (window.getSelection)
		{
			var range = document.createRange();
			range.selectNode(this);
			window.getSelection().addRange(range);
		}
	});

	// Fill in examples
	$('#example1').click(function() {
		$('#input').val(`curl --location --request POST 'https://www.douyin.com/webcast/wallet_api/diamond_buy_external_safe/?source=5&way=0&aid=1128&open_id=&platform=android&customized_price=100&guide_source=&two_factory_auth_verify_info=&diamond_id=666666&fp=verify_lu5s1lrf_YFJZDDpC_ocou_4OSO_8lDh_hFUX0sNkG6YF&extra=%7B%22domin_type%22%3A1%2C%22uuid%22%3A%227350580317722265122%22%2C%22sharkParams%22%3A%22%7B%5C%22screen_size%5C%22%3A%7B%5C%22x%5C%22%3A360%2C%5C%22y%5C%22%3A740%7D%2C%5C%22mouse_area%5C%22%3A%7B%5C%22x%5C%22%3A502%2C%5C%22y%5C%22%3A881%7D%2C%5C%22page_stay_time%5C%22%3A21%7D%22%2C%22create_pay_type%22%3A%221%22%2C%22caijing_pay_params%22%3A%22%7B%5C%22ptcode%5C%22%3A%5C%22wx%5C%22%2C%5C%22channel_support_scene%5C%22%3A%5C%22WX_H5%5C%22%2C%5C%22support_evoke_channels%5C%22%3A%5C%22H5%2CMINIH5%5C%22%2C%5C%22trace_id%5C%22%3A%5C%2220240326160728633910za0b1c7y2x32%5C%22%2C%5C%22risk_info%5C%22%3A%5C%22%7B%5C%5C%5C%22platform_type%5C%5C%5C%22%3A%5C%5C%5C%22H5_new%5C%5C%5C%22%7D%5C%22%2C%5C%22jh_pass_through%5C%22%3A%5C%22%7B%5C%5C%5C%22is_superpay_active%5C%5C%5C%22%3A%5C%5C%5C%22false%5C%5C%5C%22%2C%5C%5C%5C%22jh_ext_info%5C%5C%5C%22%3Anull%2C%5C%5C%5C%22prepay_continue%5C%5C%5C%22%3A%5C%5C%5C%221%5C%5C%5C%22%2C%5C%5C%5C%22super_pay_support_channel%5C%5C%5C%22%3Anull%7D%5C%22%2C%5C%22ptcode_info%5C%22%3A%5C%22%7B%7D%5C%22%7D%22%2C%22guide_app_id%22%3A%22%22%7D' \
--header 'authority: www.douyin.com' \
--header 'accept: application/json, text/plain, */*' \
--header 'accept-language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6' \
--header 'cache-control: no-cache' \
--header 'content-length: 0' \
--header 'content-type: application/x-www-form-urlencoded' \
--header 'cookie: _tea_utm_cache_10006=undefined; passport_csrf_token=d37eb84d13e1d44e9128c8fcb36d69ff; passport_csrf_token_default=d37eb84d13e1d44e9128c8fcb36d69ff; ttcid=f28086aac7ec423b9fe69fa654c86b7627; bd_ticket_guard_client_web_domain=2; d_ticket=beabeb2f41646d90105e90398b7658aa84f05; passport_assist_user=CjzsAAQfO66DbivUOe9WMf0ANACLDCOQPhGjjfpsIJA6mrHqa00zu5VRw6GS3DLnf_neJBeJabonBeC2gyYaSgo8hI0Oh0JkkLNh3nwU2N0HXxIyoCnEQG16ofwSSxSnJfUu1HNDRQNcmjzFVcjEXPdQrqthUF_ElkZIsvWqEIvnzA0Yia_WVCABIgEDUC8M5A%3D%3D; n_mh=50J755WYFlPomvBmbSqRh0lmZTXp4kjyaWYY7oiR42Q; sso_auth_status=8dd712d39fb3c4021177837eb7f26eeb; sso_auth_status_ss=8dd712d39fb3c4021177837eb7f26eeb; sso_uid_tt=357afcee1cdd56b712a3edb58123c89e; sso_uid_tt_ss=357afcee1cdd56b712a3edb58123c89e; toutiao_sso_user=5e3db4916f4ca273bb3553d3e0496f7e; toutiao_sso_user_ss=5e3db4916f4ca273bb3553d3e0496f7e; sid_ucp_sso_v1=1.0.0-KGUzNDBhYzE5OGY5MjZlMjM0N2EzZTIyODNkYWM5YWVmNDM2YTEzODQKHwienIiGigIQ1L6BsAYYlk4gDDC3it7OBTgCQPEHSAYaAmxxIiA1ZTNkYjQ5MTZmNGNhMjczYmIzNTUzZDNlMDQ5NmY3ZQ; ssid_ucp_sso_v1=1.0.0-KGUzNDBhYzE5OGY5MjZlMjM0N2EzZTIyODNkYWM5YWVmNDM2YTEzODQKHwienIiGigIQ1L6BsAYYlk4gDDC3it7OBTgCQPEHSAYaAmxxIiA1ZTNkYjQ5MTZmNGNhMjczYmIzNTUzZDNlMDQ5NmY3ZQ; passport_auth_status=17bf2c2f6be9f01342cfcf9b1c73911c%2C2cc578251d9a5f5aa33cd84754c5eed5; passport_auth_status_ss=17bf2c2f6be9f01342cfcf9b1c73911c%2C2cc578251d9a5f5aa33cd84754c5eed5; uid_tt=12fbff69d5e09c61c4be3f5aabf45ad6; uid_tt_ss=12fbff69d5e09c61c4be3f5aabf45ad6; sid_tt=24b305155a03c67bd40ed82ce7ea1ecf; sessionid=24b305155a03c67bd40ed82ce7ea1ecf; sessionid_ss=24b305155a03c67bd40ed82ce7ea1ecf; _bd_ticket_crypt_cookie=7e02f160c0e495879148e52841fd3c95; __security_server_data_status=1; __ac_signature=_02B4Z6wo00f01THoDdQAAIDCmdPlA80K4nUxyAlAACp7YQTZmMyAIFDKWsir3qdkJ5QBFo3M-JwcZbueE3groamhEgso.Qgpq2883g0HAKDK7ADyUckbPOjszX.12EMjYQETqjnkBhwOIh0xfb; douyin.com; device_web_cpu_core=20; device_web_memory_size=8; architecture=amd64; dy_swidth=1920; dy_sheight=1080; stream_recommend_feed_params=%22%7B%5C%22cookie_enabled%5C%22%3Atrue%2C%5C%22screen_width%5C%22%3A1920%2C%5C%22screen_height%5C%22%3A1080%2C%5C%22browser_online%5C%22%3Atrue%2C%5C%22cpu_core_num%5C%22%3A20%2C%5C%22device_memory%5C%22%3A8%2C%5C%22downlink%5C%22%3A10%2C%5C%22effective_type%5C%22%3A%5C%224g%5C%22%2C%5C%22round_trip_time%5C%22%3A200%7D%22; csrf_session_id=4229161431b6b92712f3f90607ec6207; publish_badge_show_info=%220%2C0%2C0%2C1711440320741%22; LOGIN_STATUS=1; FOLLOW_LIVE_POINT_INFO=%22MS4wLjABAAAAWEAtbQAj4UOTz0BSW_fQj2cRC-SLcTKZbikuSwj8yVk%2F1711468800000%2F0%2F1711440321035%2F0%22; strategyABtestKey=%221711440321.694%22; _bd_ticket_crypt_doamin=2; volume_info=%7B%22isUserMute%22%3Afalse%2C%22isMute%22%3Afalse%2C%22volume%22%3A0.6%7D; GlobalGuideTimes=%221711440322%7C0%22; store-region=cn-fj; store-region-src=uid; bd_ticket_guard_client_data=eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCTXFsdHFqOFZxUkgxMzVPeXVHUkJFYTZMampxL0lRZk5jYllJcEp5K0lxcUlZZjROTjdUMk95YWNpRnF0bGo4V3RieXIrR1N0MzluUXFJU0tPalNGQXc9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoxfQ%3D%3D; sid_guard=24b305155a03c67bd40ed82ce7ea1ecf%7C1711440325%7C5044187%7CThu%2C+23-May-2024+17%3A15%3A12+GMT; sid_ucp_v1=1.0.0-KDY2YjA3MDFlNDI5OGM0NWZkOTljM2EwZGI2YWNkMDIxMzYwMDNlMjIKGQienIiGigIQxYOKsAYYlk4gDDgCQPEHSAQaAmxxIiAyNGIzMDUxNTVhMDNjNjdiZDQwZWQ4MmNlN2VhMWVjZg; ssid_ucp_v1=1.0.0-KDY2YjA3MDFlNDI5OGM0NWZkOTljM2EwZGI2YWNkMDIxMzYwMDNlMjIKGQienIiGigIQxYOKsAYYlk4gDDgCQPEHSAQaAmxxIiAyNGIzMDUxNTVhMDNjNjdiZDQwZWQ4MmNlN2VhMWVjZg; odin_tt=8e407c60f13d381f5f9bb142ba14257c20e0fe166172e9b0adc0cb4b49ccc9057382835072f5db1a0b804ab305b9a77b; home_can_add_dy_2_desktop=%221%22; download_guide=%220%2F%2F1%22; s_v_web_id=verify_lu83dx68_SPh3wFyw_tRqH_4ubS_Ar5J_uDtwv5EmB5Lg; IsDouyinActive=false; passport_fe_beating_status=false; stream_player_status_params=%22%7B%5C%22is_auto_play%5C%22%3A0%2C%5C%22is_full_screen%5C%22%3A0%2C%5C%22is_full_webscreen%5C%22%3A0%2C%5C%22is_mute%5C%22%3A0%2C%5C%22is_speed%5C%22%3A1%2C%5C%22is_visible%5C%22%3A0%7D%22; tt_scid=RZ1CJnEg8Itr3Cr2k4n8GBYCOVbxSPNKK5my8hOVLhq7E7KYVgKJLVLGBgP4ai9R7461; msToken=LGpk7Q5SJ6Y8dpwYhbf-VHTCvTMxezymoyjh2eWNq7q7rVRS8MglsUxypZ0gMLrUA6DdIoWwtrli3pSGMS70S1XbI8SmJ691pKIm5AML2CkYv5lZRYSGCwgkM45vBQ==; msToken=Uzsb_6KTG0Z9Xqt4DeRuXZmxNw0miAT-AatspHA_412DUt4Up7kXE4hykYIXM8cVndKuUZcTagWuW-5-I8JID0jJj3flPrAC0uyc2IwBrEjiO2p51RMp5HtkLQEVeA==; ttwid=1%7CUWWCDa-3fyNdEg1F2T8jG8Pl4bMWpaLg_ZukXYNp_XE%7C1711504987%7C65b10c606a4eeb47412f771871b6fa18307a5e6747f562eb5ee46b6345d9d6aa; msToken=_8V-8-HOmWuYgcvDrLdMOYN6YW2laxea8bzE_CnnvVhJboo0RWsnp3CckLOwzhbBoLlUg6lWzVxrnw-vRVDT1v23FxFA4TeqOb4zKqkiVbgsohpdKNh_qky5ILVCRw==' \
--header 'origin: https://www.douyin.com' \
--header 'pragma: no-cache' \
--header 'referer: https://www.douyin.com/pay' \
--header 'sec-ch-ua: "Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"' \
--header 'sec-ch-ua-mobile: ?1' \
--header 'sec-ch-ua-platform: "Android"' \
--header 'sec-fetch-dest: empty' \
--header 'sec-fetch-mode: cors' \
--header 'sec-fetch-site: same-origin' \
--header 'user-agent: Mozilla/5.0 (Linux; Android 13; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36 Edg/122.0.0.0' \
--header 'x-secsdk-csrf-token: 0001000000013b709f5a20fc3f0a688d216750cf5fa5c892327ec6a31ee12a4412e9e4519f0117c07cb7bd5bf19d'`).keyup();
	});
	$('#example2').click(function() {
		$('#input').val('curl https://api.example.com/surprise \\\n     -u banana:coconuts \\\n     -d "sample data"').keyup();
	});
	$('#example3').click(function() {
		$('#input').val('curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d \'{"type":"A","name":"www","data":"162.10.66.0","priority":null,"port":null,"weight":null}\' "https://api.digitalocean.com/v2/domains/example.com/records"').keyup();
	});
	$('#example4').click(function() {
		$('#input').val('curl -u "demo" -X POST -d @file1.txt -d @file2.txt https://example.com/upload').keyup();
	});
	$('#example5').click(function() {
		$('#input').val("curl -X POST https://api.easypost.com/v2/shipments \\\n     -u API_KEY: \\\n     -d 'shipment[to_address][id]=adr_HrBKVA85' \\\n     -d 'shipment[from_address][id]=adr_VtuTOj7o' \\\n     -d 'shipment[parcel][id]=prcl_WDv2VzHp' \\\n     -d 'shipment[is_return]=true' \\\n     -d 'shipment[customs_info][id]=cstinfo_bl5sE20Y'").keyup();
	});

	var dark = false;
	$("#dark").click(function()
	{
		if(!dark)
		{
			$("head").append("<link rel='stylesheet' href='resources/css/dark.css' id='dark-css'>");
			$("#dark").html("light mode");
		} else
		{
			$("#dark-css").remove();
			$("#dark").html("dark mode");
		}
		dark = !dark;
	});

});
