<?php
    //如果出现乱码，回过头去查看四个方面的内容：1.文件，2.页面，3.请求，4.地址
    header("Access-Control-Allow-Origin:*");
    //乱码
    header('Content-type:text/html;charset=utf-8');
    $ch = curl_init();
	$url = "http://api.avatardata.cn/Lore/LoreClass?key=3d7d590f9fa44094a7722049ba8e0f9c";
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // 执行HTTP请求
    curl_setopt($ch , CURLOPT_URL , $url);
    $res = curl_exec($ch);
    echo $res;
?>
