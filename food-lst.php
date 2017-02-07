<?php
//如果出现乱码，回过头去查看四个方面的内容：1.文件，2.页面，3.请求，4.地址
    header("Access-Control-Allow-Origin:*");
    header('Content-type:text/html;charset=utf-8');

    //可以通过$_GET['id']去获取url里的参数

    @$id = $_GET["id"]?$_GET["id"]:3;
    @$page = $_GET["page"]?$_GET["page"]:2;
    @$rows = $_GET["rows"]?$_GET["rows"]:9;

    $ch = curl_init();
    $url = 'http://api.avatardata.cn/Lore/List?key=3d7d590f9fa44094a7722049ba8e0f9c&id='.$id.'&page='.$page.'&rows=' .$rows;
  

    // $url = 'http://sclub.jd.com/comment/productPageComments.action?productId=1927536&score=0&sortType=3&page='.$page.'&pageSize='.$rows
    // 添加apikey到header
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // 执行HTTP请求
    curl_setopt($ch , CURLOPT_URL , $url);
    $res = curl_exec($ch);
    
    echo $res;
    // //var_dump(json_decode($res)); //var_dump它是一个类似于js里console.table(object)

    // $result =  json_decode($res,true); // json_decode，将对象转换
    // echo json_encode($result); //echo是内容输出,将$result这个对象转化json对象
?>

