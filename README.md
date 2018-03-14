# <h1>Alteryx test task</h1>
<h2>install rabbitmq</h2><br>
    1  sudo apt-get update && sudo apt-get upgrade<br>
    2  sudo apt-get install erlang && sudo apt-get install rabbitmq-server<br>
    3  systemctl status rabbitmq-server<br>
    4  sudo systemctl enable rabbitmq-server<br>
    5  sudo systemctl start rabbitmq-server<br>
    6  sudo rabbitmq-plugins enable rabbitmq_management<br>
    7  sudo rabbitmqctl add_user admin admin<br>
   11  sudo rabbitmqctl set_user_tags admin administrator<br>
   12  sudo rabbitmqctl set_permissions -p / admin ".*" ".*" ".*"<br>
<h2> Install node.js environment</h2><br>
