var controlpanel = {
    "content": "<div class=\"control\">\n" +
    "        <div class=\"control_left\">\n" +
    "            <button id=\"control_home\">主页</button><input class=\"serch\" value=\"搜索\" onfocus=\"if (value =='搜索'){value =''}\"onblur=\"if (value ==''){value='搜索'}\"/>\n" +
    "            <div class=\"control_menu\">\n" +
    "                 <ul>\n" +
    "                    <li class=\"control_tree_root\">\n" +
    "                        <div>\n" +
    "                            <span>文件共享</span>\n" +
    "                        </div>\n" +
    "                        <div style=\"overflow: hidden\">\n" +
    "                            <ul class=\"control_tree\">\n" +
    "                                <li class=\"control_app\">用户账号</li>\n" +
    "                                <li class=\"control_app\">用户群组</li>\n" +
    "                                <li class=\"control_app\">共享文件夹</li>\n" +
    "                                <li class=\"control_app\">文件服务</li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"control_tree_root\">\n" +
    "                        <div>\n" +
    "                            <span>连接性</span>\n" +
    "                        </div>\n" +
    "                        <div style=\"overflow: hidden\">\n" +
    "                            <ul class=\"control_tree\">\n" +
    "                                <li class=\"control_app\">网络</li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"control_tree_root\" style=\"display: none\">\n" +
    "                        <div>\n" +
    "                            <span>系统</span>\n" +
    "                        </div>\n" +
    "                        <div style=\"overflow: hidden\">\n" +
    "                            <ul class=\"control_tree\" >\n" +
    "                                <li class=\"control_app\">主题</li>\n" +
    "                                <li class=\"control_app\">硬件与电源</li>\n" +
    "                                <li class=\"control_app\">还原与更新</li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                </ul>\n"+
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"control_right\">\n" +
    "            <!--主页-->\n" +
    "            <div id=\"control_home_content\" class=\"control_panel\">\n" +
    "                <div class=\"control_panel_item\">\n" +
    "                    <div class=\"item_title\">文件共享</div>\n" +
    "                    <div class=\"control_app\"><img src='/yhos/Public/images/user.png' draggable=\"false\"/><span>用户账号</span></div>\n" +
    "                    <div class=\"control_app\"><img src='/yhos/Public/images/users.png' draggable=\"false\"/><span>用户群组</span></div>\n" +
    "                    <div class=\"control_app\"><img src='/yhos/Public/images/logo.png' draggable=\"false\"/><span>共享文件夹</span></div>\n" +
    "                    <div class=\"control_app\"><img src='/yhos/Public/images/file_server_tools.png' draggable=\"false\"/><span>文件服务</span></div>\n" +
    "                </div>\n" +
    "                <div class=\"control_panel_item\">\n" +
    "                    <div class=\"item_title\">连接性</div>\n" +
    "                    <div class=\"control_app\"><img src='/yhos/Public/images/network.png' draggable=\"false\"/><span>网络</span></div>\n" +
    "                    <div class=\"control_app\"><img src='/yhos/Public/images/downloads.png' draggable=\"false\"/><span>外网访问</span></div>\n" +
    "                </div>\n" +
    "                <div class=\"control_panel_item\">\n" +
    "                    <div class=\"item_title\">系统</div>\n" +
    "                    <div class=\"control_app\"><img src='/yhos/Public/images/theme.png' draggable=\"false\"/><span>主题</span></div>\n" +
    "                    <div class=\"control_app\"><img src='/yhos/Public/images/plugin.png' draggable=\"false\"/><span>硬件与电源</span></div>\n" +
    "                    <div class=\"control_app\"><img src='/yhos/Public/images/updater.png' draggable=\"false\"/><span>还原与更新</span></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!--用户账号-->\n" +
    "            <div id =\"control_yhzh\" class=\"control_panel\">\n" +
    "                <div class=\"tab_strip\">\n" +
    "                    <span>用户账号</span>\n" +
    "                    <span>高级设置</span>\n" +
    "                    <span> </span>\n" +
    "                </div>\n" +
    "                <div class=\"tool_bar\">\n" +
    "                    <button class=\"user_tool_add\">新增</button>\n" +
    "                    <button class=\"user_tool_edit\">编辑</button>\n" +
    "                    <button class=\"user_tool_delete\">删除</button>\n" +
    "                    <button class=\"user_tool_quota\">配额</button>\n" +
    "                </div>\n" +
    "                <div class=\"user_title\">\n" +
    "                    <table id=\"userTable\" width=\"100%\" border=\"0\">\n" +
    "                        <tbody>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!--网络-->\n" +
    "            <div id =\"control_wl\" class=\"control_panel\">\n" +
    "                <div class=\"tab_strip\">\n" +
    "                    <span>常规</span>\n" +
    "                    <span>网络界面</span>\n" +
    "                    <span>流量控制</span>\n" +
    "                    <span>静态路由</span>\n" +
    "                    <span>DNS设置</span>\n" +
    "                    <span> </span>\n" +
    "                </div>\n" +
    "                <div id =\"network_cg\" class=\"network_body\">\n" +
    "                    1\n" +
    "                </div>\n" +
    "                <div id =\"network_jm\" class=\"network_body\">\n" +
    "                    <div class=\"tool_bar\">\n" +
    "                        <button class=\"network_tool_create\">新增</button>\n" +
    "                        <button class=\"network_tool_edit\">编辑</button>\n" +
    "                        <button class=\"network_tool_delete\">删除</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"network_item\">\n" +
    "                        <div>局域网1</div>\n" +
    "                        <div>已联机</div>\n" +
    "                        <ul>\n" +
    "                            <li>\n" +
    "                                <table  width=\"600px\" border=\"0\">\n" +
    "                                    <tbody>\n" +
    "                                        <tr>\n" +
    "                                            <td width=\"40%\" style=\"font-weight: bold;\">使用DHCP</td>\n" +
    "                                            <td width=\"60%\">是</td>\n" +
    "                                        </tr>\n" +
    "                                        <tr>\n" +
    "                                            <td width=\"40%\" style=\"font-weight: bold;\">IP地址</td>\n" +
    "                                        </tr>\n" +
    "                                        <tr>\n" +
    "                                            <td width=\"40%\" style=\"font-weight: bold;\">子网掩码</td>\n" +
    "                                        </tr>\n" +
    "                                        <tr>\n" +
    "                                            <td width=\"40%\" style=\"font-weight: bold;\">IPv6地址</td>\n" +
    "                                        </tr>\n" +
    "                                        <tr>\n" +
    "                                            <td width=\"40%\" style=\"font-weight: bold;\">网络状态</td>\n" +
    "                                            <td width=\"60%\">100Mb/s,全双工,MTU 1500</td>\n" +
    "                                        </tr>\n" +
    "                                    </tbody>\n" +
    "                                </table>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                        <div class=\"item-toggle-img\">\n" +
    "                            <img src=\"/yhos/Public/images/jstree_open.png\" border=\"1\" />\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div id =\"network_llkz\" class=\"network_body\">\n" +
    "                    3\n" +
    "                </div>\n" +
    "            </div>\n" +
    "           <!--文件服务-->\n" +
    "            <div id =\"control_wjfw\" class=\"control_panel\">\n" +
    "                <div class=\"tab_strip\">\n" +
    "                    <span>SMB/AFP/NFS</span>\n" +
    "                    <span>FTP</span>\n" +
    "                    <span>TFTP</span>\n" +
    "                    <span>rsync</span>\n" +
    "                    <span>高级设置</span>\n" +
    "                    <span> </span>\n" +
    "                </div>\n" +
    "                <!--AMB/AFP/NFS-->\n" +
    "                <div id =\"fileserver_smb\" class=\"fileserver\">\n" +
    "                    <div class=\"fileserver_body\">\n" +
    "                        <div class=\"item\">\n" +
    "                            <div class=\"line\">SMB</div>\n" +
    "                            <div class=\"content\">\n" +
    "                                <div class=\"content_item\">\n" +
    "                                    <input name=\"checkbox\" type=\"checkbox\" id=\"smb\" value=\"checkbox\" />\n" +
    "                                    <label for=\"smb\">启用smb服务</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            <div class=\"line\">AFP</div>\n" +
    "                            <div class=\"content\">\n" +
    "                                <div class=\"content_item\">\n" +
    "                                    <input name=\"checkbox\" type=\"checkbox\" id=\"afp\" value=\"checkbox\" />\n" +
    "                                    <label for=\"afp\">启用afp服务</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            <div class=\"line\">NFS</div>\n" +
    "                            <div class=\"content\">\n" +
    "                                <div class=\"content_item\">\n" +
    "                                    <input name=\"checkbox\" type=\"checkbox\" id=\"nfs\" value=\"checkbox\" />\n" +
    "                                    <label for=\"nfs\">启用nfs服务</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"content_wrapper_foter\">\n" +
    "                        <span class='yes'>应用</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div id =\"fileserver_ftp\" class=\"fileserver\">\n" +
    "                    <div class=\"fileserver_body\">\n" +
    "                        <div class=\"item\">\n" +
    "                            <div class=\"line\">FTP/FTPS</div>\n" +
    "                            <div class=\"content\">\n" +
    "                                <div class=\"content_item\">\n" +
    "                                    <input name=\"checkbox\" type=\"checkbox\" id=\"ftp\" value=\"checkbox\" />\n" +
    "                                    <label for=\"ftp\">启用ftp服务(无加密)</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"content_wrapper_foter\">\n" +
    "                        <span class='yes'>应用</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!--TFTP-->\n" +
    "                <div id =\"fileserver_tftp\" class=\"fileserver\">\n" +
    "                    <div class=\"fileserver_body\">\n" +
    "                        <div class=\"item\">\n" +
    "                            <div class=\"line\">FTP/FTPS</div>\n" +
    "                            <div class=\"content\">\n" +
    "                                <div class=\"content_item\">\n" +
    "                                    <input name=\"checkbox\" type=\"checkbox\" id=\"tftp\" value=\"checkbox\" />\n" +
    "                                    <label for=\"ftp\">启用tftp服务(无加密)</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"content_wrapper_foter\">\n" +
    "                        <span class='yes'>确定</span>\n" +
    "                        <span class='no'>取消</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!--用户群组-->\n" +
    "            <div id =\"control_yhqz\" class=\"control_panel\">\n" +
    "                <div class=\"tool_bar\">\n" +
    "                    <button class=\"user_tool_add\">新增</button>\n" +
    "                    <button class=\"user_tool_edit\">编辑</button>\n" +
    "                    <button class=\"user_tool_delete\">删除</button>\n" +
    "                    <button class=\"user_tool_editgroup\">编辑群组成员</button>\n" +
    "                </div>\n" +
    "                <table  width=\"100%\" border=\"0\">\n" +
    "                    <tbody>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "            <!--共享文件夹-->\n" +
    "            <div id =\"control_share_folders\" class=\"control_panel\" style=\"display: none\">\n" +
    "                <div class=\"tool_bar\">\n" +
    "                    <button class=\"user_tool_add\">新增</button>\n" +
    "                    <button class=\"user_tool_edit\">编辑</button>\n" +
    "                    <button class=\"user_tool_delete\">删除</button>\n" +
    "                    <button class=\"user_tool_editgroup\">加密</button>\n" +
    "                    <button class=\"user_tool_editgroup\">动作</button>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                  <ul>\n" +
    "                  </ul>\n" +
    "                </div>\n" +
    "            </div>\n"+
    "        </div>\n" +
    "    </div>\n" +
    "    <!--弹出框的div-->\n" +
    "    <!--编辑-->\n" +
    "    <div class=\"network_edit control_edit file_windows\" style=\"display: none;top:0\">\n" +
    "        <div class=\"file_windows_head handler\">\n" +
    "            <span>编辑</span>\n" +
    "        </div>\n" +
    "        <div class=\"network_edit_content\">\n" +
    "            <div class=\"tab_strip\">\n" +
    "                <span>IPv4</span>\n" +
    "                <span>IPv6</span>\n" +
    "                <span>802.1X</span>\n" +
    "                <span> </span>\n" +
    "            </div>\n" +
    "            <!--ipv4-->\n" +
    "            <div id =\"network_edit_ipv4\" class=\"content_wrapper\">\n" +
    "                <form>\n" +
    "                    <div class=\"content_item\">\n" +
    "                        <input type=\"radio\" name=\"sex\" id=\"active\" checked/>\n" +
    "                        <label for=\"active\">自动获得网络设置(DHCP)</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item\">\n" +
    "                        <input type=\"radio\" name=\"sex\" id=\"passive\" />\n" +
    "                        <label for=\"passive\">手动设置网络设置</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item input\">\n" +
    "                        <label for=\"ip\">IP地址</label>\n" +
    "                        <input type=\"text\" name=\"sex\" id=\"ip\" />\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item input\">\n" +
    "                        <label for=\"mask\">子网掩码</label>\n" +
    "                        <input type=\"text\" name=\"sex\" id=\"mask\" />\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item input\">\n" +
    "                        <label for=\"gateway\">网关</label>\n" +
    "                        <input type=\"text\" name=\"sex\" id=\"gateway\" />\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item input\">\n" +
    "                        <label for=\"dns_server\">DNS Server</label>\n" +
    "                        <input type=\"text\" name=\"sex\" id=\"dns_server\" />\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item\">\n" +
    "                        <input name=\"checkbox\" type=\"checkbox\" id=\"default_gateway\" value=\"checkbox\" />\n" +
    "                        <label for=\"default_gateway\">设为默认网关</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item\">\n" +
    "                        <input name=\"checkbox\" type=\"checkbox\" id=\"default_vlan\" value=\"checkbox\" />\n" +
    "                        <label for=\"default_vlan\">启用VLAN(802.1Q)</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item input\">\n" +
    "                        <label for=\"default_vlanid\">VLAN ID:</label>\n" +
    "                        <input name=\"checkbox\" type=\"text\" id=\"default_vlanid\" value=\"checkbox\" />\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <!--ipv6-->\n" +
    "            <div id =\"network_edit_ipv6\" class=\"content_wrapper\">\n" +
    "                <form>\n" +
    "                    <div class=\"content_item input\">\n" +
    "                        <label for=\"ip\">IPv6s设置</label>\n" +
    "                        <input type=\"text\" name=\"sex\" id=\"ip\" />\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item input\">\n" +
    "                        <label for=\"mask\">IPv6地址</label>\n" +
    "                        <input type=\"text\" name=\"sex\" id=\"mask\" />\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item input\">\n" +
    "                        <label for=\"gateway\">Prefix长度</label>\n" +
    "                        <input type=\"text\" name=\"sex\" id=\"gateway\" />\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item input\">\n" +
    "                        <label for=\"dns_server\">默认网关(gateway)</label>\n" +
    "                        <input type=\"text\" name=\"sex\" id=\"dns_server\" />\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item input\">\n" +
    "                        <label for=\"dns_server\">首选DNS服务器</label>\n" +
    "                        <input type=\"text\" name=\"sex\" id=\"dns_server\" />\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"content_wrapper_foter\">\n" +
    "            <span class='yes'>确定</span>\n" +
    "            <span class='no'>取消</span>\n" +
    "        </div>\n" +
    "    </div>" +
    "<!--用户编辑-->\n" +
    "    <div class=\"user_edit bg_tips_box\" style=\"position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;\">\n" +
    "        <div class=\"tips_box file_windows\" style=\"width: 50%;height: auto;\">\n" +
    "            <div class=\"file_windows_head handler\">\n" +
    "             <span>编辑</span>\n" +
    "            </div>\n" +
    "            <div class=\"user_edit_content\">\n" +
    "                <div class=\"tab_strip\">\n" +
    "                    <span>信息</span>\n" +
    "                    <span> </span>\n" +
    "                </div>\n" +
    "                <div id = \"user_edit_info\" class=\"content_wrapper\" style=\"display: block\">\n" +
    "                    <form>\n" +
    "                        <div class=\"content_item input\">\n" +
    "                            <label for=\"user_name\">名称*</label>\n" +
    "                            <input type=\"text\" name=\"sex\" id=\"user_name\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"content_item input\">\n" +
    "                            <label for=\"user_desc\">描述</label>\n" +
    "                            <input type=\"text\" name=\"sex\" id=\"user_desc\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"content_item input\">\n" +
    "                            <label for=\"user_email\">电子邮件</label>\n" +
    "                            <input type=\"text\" name=\"sex\" id=\"user_email\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"content_item input\">\n" +
    "                            <label for=\"user_password\">密码*</label>\n" +
    "                            <input type=\"text\" name=\"sex\" id=\"user_password\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"content_item input\">\n" +
    "                            <label for=\"user_again_password\">确认密码*</label>\n" +
    "                            <input type=\"text\" name=\"sex\" id=\"user_again_password\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"content_item\">\n" +
    "                            <input type=\"checkbox\" name=\"sex\" id=\"alter_user_pass\" checked/>\n" +
    "                            <label for=\"alter_user_pass\">不允许此用户修改密码</label>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"content_wrapper_foter\">\n" +
    "                <span class='yes'>确定</span>\n" +
    "                <span class='no'>取消</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>" +
    "    <!--添加用户-->\n" +
    "    <div class=\"user_add bg_tips_box\" style=\"position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;\">\n" +
    "        <div class=\"tips_box file_windows\" style=\"width: 55%;height: auto;\">\n" +
    "            <div class=\"file_windows_head handler\">\n" +
    "                <span>添加用户</span>\n" +
    "            </div>\n" +
    "            <div class=\"user_edit_content\">\n" +
    "                <div class=\"tab_strip\">\n" +
    "                    <span>信息</span>\n" +
    "                    <span> </span>\n" +
    "                </div>\n" +
    "                <div id = \"user_add_info\" class=\"content_wrapper\" style=\"display: block\">\n" +
    "                    <form>\n" +
    "                        <div class=\"content_item input\">\n" +
    "                            <label for=\"add_user_name\">名称*</label>\n" +
    "                            <input type=\"text\" name=\"sex\" id=\"add_user_name\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"content_item input\">\n" +
    "                            <label for=\"add_user_desc\">描述</label>\n" +
    "                            <input type=\"text\" name=\"sex\" id=\"add_user_desc\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"content_item input\">\n" +
    "                            <label for=\"add_user_email\">电子邮件</label>\n" +
    "                            <input type=\"text\" name=\"sex\" id=\"add_user_email\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"content_item input\">\n" +
    "                            <label for=\"add_user_password\">密码*</label>\n" +
    "                            <input type=\"text\" name=\"sex\" id=\"add_user_password\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"content_item input\">\n" +
    "                            <label for=\"add_user_again_password\">确认密码*</label>\n" +
    "                            <input type=\"text\" name=\"sex\" id=\"add_user_again_password\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"content_item input\">\n" +
    "                            <label for=\"add_user_group\">用户所属的组:</label>\n" +
    "                            <select id=\"add_user_group\" class=\"add_user_group\" name=\"add_user_group\">\n" +
    "                            </select>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"content_wrapper_foter\">\n" +
    "                <span class='yes'>确定</span>\n" +
    "                <span class='no'>取消</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--删除用户-->\n" +
    "    <div class=\"delet_user bg_tips_box\" style=\"position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;\">\n" +
    "        <div class=\"tips_box file_windows\" style=\"width: 30%;height: auto;\">\n" +
    "            <div class=\"content_wrapper\">\n" +
    "               <form>\n" +
    "                       <h6 style=\"text-align: center;padding: 20px 0\">是否要删除用户<span>root</span>？</h6>\n" +
    "                   </form>\n" +
    "            </div>\n" +
    "            <div class=\"content_wrapper_foter\">\n" +
    "               <span class='yes' style=\"background: #ffc107;border: none;\">删除</span>\n" +
    "               <span class='no'>取消</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>" +
    "    <!--用户配额-->\n" +
    "    <div class=\"quota_user bg_tips_box\" style=\"position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;\">\n" +
    "        <div class=\"tips_box file_windows\" style=\"width: 50%;height: auto;\">\n" +
    "            <div class=\"file_windows_head handler\">\n" +
    "                <span>用户配额</span>\n" +
    "            </div>\n" +
    "            <div style=\"padding: 10px 20px;text-align: center\">\n" +
    "                <table  width=\"100%\" border=\"0\">\n" +
    "                    <tbody>\n" +
    "                      <tr style=\"color: green\">\n" +
    "                        <td>存储空间</td>\n" +
    "                        <td>有效配额</td>\n" +
    "                        <td>群组配额</td>\n" +
    "                        <td>空间配额</td>\n" +
    "                        <td>单位</td>\n" +
    "                     </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "            <div class=\"content_wrapper_foter\">\n" +
    "                <span class='yes'>确定</span>\n" +
    "                <span class='no'>取消</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>" +
    "    <!--添加用户组-->\n" +
    "    <div class=\"add_usergroup bg_tips_box\" style=\"position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;\">\n" +
    "        <div class=\"tips_box file_windows\" style=\"width: 30%;height: auto;\">\n" +
    "            <div  style=\"text-align: center;\" class=\"file_windows_head handler\" >\n" +
    "            <span>添加用户组</span>\n" +
    "            </div>\n" +
    "            <div class=\"add_usergroup_content\">\n" +
    "                <form>\n" +
    "                        <div class=\"content_item input\">\n" +
    "                            <label for=\"usergroup_name\">用户群组:</label>\n" +
    "                            <input type=\"text\" name=\"sex\" id=\"usergroup_name\" />\n" +
    "                        </div>\n" +
    "                <div class=\"content_item input\">\n" +
    "                    <label for=\"usergroup_desc\">群组说明:</label>\n" +
    "                    <input type=\"text\" name=\"sex\" id=\"usergroup_desc\" />\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            </div>\n" +
    "            <div class=\"content_wrapper_foter\">\n" +
    "                <span class='yes'>确定</span>\n" +
    "                <span class='no'>取消</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>" +
    "    <!--编辑用户组-->\n" +
    "    <div class=\"edit_usergroup bg_tips_box\" style=\"position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;\">\n" +
    "        <div class=\"tips_box file_windows\" style=\"width: 30%;height: auto;\">\n" +
    "            <div  style=\"text-align: center;\" class=\"file_windows_head handler\" >\n" +
    "                <span>编辑用户组</span>\n" +
    "            </div>\n" +
    "            <div class=\"add_usergroup_content\">\n" +
    "                <form>\n" +
    "                    <div class=\"content_item input\">\n" +
    "                        <label for=\"usergroup_name\">用户群组:</label>\n" +
    "                        <input id=\"usergroup_name\" type=\"text\"/>\n" +
    "                    </div>\n" +
    "                <div class=\"content_item input\">\n" +
    "                    <label for=\"usergroup_ps\">群组说明:</label>\n" +
    "                    <input id=\"usergroup_ps\" type=\"text\"/>\n" +
    "                </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"content_wrapper_foter\">\n" +
    "                <span class='yes'>确定</span>\n" +
    "                <span class='no'>取消</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>" +
    "    <!--删除窗口raid/存储空间-->\n" +
    "    <div class=\"delet_group bg_tips_box\" style=\"position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;\">\n" +
    "        <div class=\"tips_box file_windows\" style=\"width: 30%;height: auto;\">\n" +
    "            <div class=\"content_wrapper\">\n" +
    "                <form>\n" +
    "                    <h6 style=\"text-align: center;padding: 20px 0\">是否要删除用户组<span>root</span>？</h6>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"content_wrapper_foter\">\n" +
    "                <span class='yes' style=\"background: #ffc107;border: none;\">删除</span>\n" +
    "                <span class='no'>取消</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>" +
    "     <!--添加共享文件夹-->\n" +
    "    <div class=\"create_share_file_directory bg_tips_box\" style=\"position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;\">\n" +
    "        <div class=\"tips_box file_windows\" style=\"width: 30%;height: auto;\">\n" +
    "            <div  style=\"text-align: center;\" class=\"file_windows_head handler\" >\n" +
    "                <span>新增共享文件夹</span>\n" +
    "            </div>\n" +
    "            <div class=\"content_item input\">\n" +
    "                <label for=\"file_directory\">文件夹名称:</label>\n" +
    "                <input type=\"text\" id=\"file_directory\" />\n" +
    "            </div>\n" +
    "            <div >\n" +
    "                <label for=\"raid_group\">所在位置:</label>\n" +
    "                <select id=\"raid_group\" class=\"raid_group\"></select>\n" +
    "            </div>\n" +
    "            <div class=\"content_wrapper_foter\">\n" +
    "                <span class='yes' style=\"border: none;\">确定</span>\n" +
    "                <span class='no'>取消</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>" +
    "    <!--删除共享文件夹-->\n" +
    "    <div class=\"delet_share_file_directory bg_tips_box\" style=\"position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;\">\n" +
    "        <div class=\"tips_box file_windows\" style=\"width: 30%;height: auto;\">\n" +
    "           <div class=\"content_wrapper\">\n" +
    "               <form>\n" +
    "                   <h6 style=\"text-align: center;padding: 20px 0\">是否要删除共享文件夹<span>root</span>？</h6>\n" +
    "               </form>\n" +
    "           </div>\n" +
    "           <div class=\"content_wrapper_foter\">\n" +
    "               <span class='yes' style=\"background: #ffc107;border: none;\">删除</span>\n" +
    "               <span class='no'>取消</span>\n" +
    "           </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--应用sam等服务-->\n" +
    "    <div class=\"set_smb_service bg_tips_box\" style=\"position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;\">\n" +
    "        <div class=\"tips_box file_windows\" style=\"width: 30%;height: auto;\">\n" +
    "            <div class=\"content_wrapper\">\n" +
    "                <form>\n" +
    "                    <h6 style=\"text-align: center;padding: 20px 0\">是否应用？</h6>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"content_wrapper_foter\">\n" +
    "                <span class='yes' style=\"background: #ffc107;border: none;\">确定</span>\n" +
    "                <span class='no'>取消</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>"+
    "    <!--应用ftp等服务-->\n" +
    "    <div class=\"set_ftp_service bg_tips_box\" style=\"position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;\">\n" +
    "        <div class=\"tips_box file_windows\" style=\"width: 30%;height: auto;\">\n" +
    "            <div class=\"content_wrapper\">\n" +
    "                <form>\n" +
    "                    <h6 style=\"text-align: center;padding: 20px 0\">是否要应用ftp<span>root</span>？</h6>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"content_wrapper_foter\">\n" +
    "                <span class='yes' style=\"background: #ffc107;border: none;\">确定</span>\n" +
    "                <span class='no'>取消</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>"
};

var diskmanagement = {
    "content": "<div class=\"storage_management\">\n" +
    "        <div class=\"storage_left\">\n" +
    "            <ul>\n" +
    "                <li class=\"storage_item\" id=\"xtgk\">\n" +
    "                    <span>系统概况</span>\n" +
    "                </li>\n" +
    "                <li class=\"storage_item\" id=\"raid\">\n" +
    "                    <span>RAID Group</span>\n" +
    "                </li>\n" +
    "                <li class=\"storage_item\" id=\"cckj\">\n" +
    "                    <span>存储空间</span>\n" +
    "                </li>\n" +
    "                <li class=\"storage_item\" id=\"iscsi_lun\" style='display: none;'>\n" +
    "                    <span>iSCSI LUN</span>\n" +
    "                </li>\n" +
    "                <li class=\"storage_item\" id=\"iscsi_target\" style='display: none;'>\n" +
    "                    <span>iSCSI Target</span>\n" +
    "                </li>\n" +
    "                <li class=\"storage_item\" id=\"hdd_ssd\">\n" +
    "                    <span>HDD/SDD</span>\n" +
    "                </li>\n" +
    "                <li class=\"storage_item\" id=\"hot_spare\" style='display: none;'>\n" +
    "                    <span>Hot Spare</span>\n" +
    "                </li>\n" +
    "                <li class=\"storage_item\" id=\"ssd_cache\" style='display: none;'>\n" +
    "                    <span>SSD 缓存</span>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"storage_right\">\n" +
    "            <div class=\"storage_right_block system_overview\" style=\"display: block;\">\n" +
    "                <ul>\n" +
    "                    <li>\n" +
    "                        <div class=\"item-title\"><span>硬盘信息</span></div>\n" +
    "                        <div class=\"item_content\">\n" +
    "                            <ul class=\"disk_info\">\n" +
    "                                <li>\n" +
    "                                    <div>yunhui</div>\n" +
    "                                    <table>\n" +
    "                                        <tr>\n" +
    "                                            <td style=\"background: #2A588C;border: 0\"></td>\n" +
    "                                            <td></td>\n" +
    "                                            <td></td>\n" +
    "                                            <td></td>\n" +
    "                                            <td></td>\n" +
    "                                            <td></td>\n" +
    "                                            <td></td>\n" +
    "                                            <td></td>\n" +
    "                                            <td></td>\n" +
    "                                            <td></td>\n" +
    "                                            <td></td>\n" +
    "                                            <td></td>\n" +
    "                                        </tr>\n" +
    "                                    </table>\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    <table>\n" +
    "                                        <tr>\n" +
    "                                            <td>\n" +
    "                                                <div><span>已使用硬盘</span></div>\n" +
    "                                                <div><span>1</span></div>\n" +
    "                                            </td>\n" +
    "                                            <td>\n" +
    "                                                <div><span>Hot Spare磁盘</span></div>\n" +
    "                                                <div><span>0</span></div>\n" +
    "                                            </td>\n" +
    "                                            <td>\n" +
    "                                                <div><span>未使用磁盘</span></div>\n" +
    "                                                <div><span>0</span></div>\n" +
    "                                            </td>\n" +
    "                                            <td>\n" +
    "                                                <div><span>可用插槽</span></div>\n" +
    "                                                <div><span>11</span></div>\n" +
    "                                            </td>\n" +
    "                                        </tr>\n" +
    "                                    </table>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <div class=\"item-title\"><span>首个卷使用情况</span></div>\n" +
    "                        <div class=\"item_content\">\n" +
    "                            <ul class=\"partition_info\">\n" +
    "                                <li></li>\n"+
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <div class=\"item-title\"><span>iSCSI使用率</span></div>\n" +
    "                        <div class=\"item_content\">\n" +
    "                            <ul>\n" +
    "                                <li>尚未开发</li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"storage_right_block raid_group\" style=\"display: none\">\n" +
    "                <div class=\"tool_bar\">\n" +
    "                    <button class=\"storage_tool_add\">新增</button>\n" +
    "                    <button class=\"storage_tool_delete\">删除</button>\n" +
    "                    <button class=\"storage_tool_manage\">管理</button>\n" +
    "                </div>\n" +
    "                <ul>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"storage_right_block disk_space\" style=\"display: none\">\n" +
    "                <div class=\"tool_bar\">\n" +
    "                    <button class=\"storage_tool_add\">新增</button>\n" +
    "                    <button class=\"storage_tool_edit\">编辑</button>\n" +
    "                    <button class=\"storage_tool_delete\">删除</button>\n" +
    "                    <button class=\"storage_tool_manage\">管理</button>\n" +
    "                    <button class=\"storage_tool_config\">配置</button>\n" +
    "                </div>\n" +
    "                <ul>\n" +

    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"storage_right_block hdd_ssd\" style=\"display: none\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "<!--添加raid-->\n" +
    "    <div class=\"add_raid bg_tips_box\" style=\"position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;\">\n" +
    "        <div class=\"tips_box file_windows\" style=\"width: 80%;height: auto\">\n" +
    "            <div class=\"content_wrapper\">\n" +
    "            <form>\n" +
    "                <h6>配置RAID Group属性</h6>\n" +
    "                <div class=\"content_item input\">\n" +
    "                    <label for=\"raid_desc\">描述:</label>\n" +
    "                    <input type=\"text\" value=\"RAID 5\" name=\"raid_desc\" id=\"raid_desc\" />\n" +
    "                </div>\n" +
    "                <div class=\"content_item input\">\n" +
    "                    <label for=\"raid_type\">存储空间类型:</label>\n" +
    "                    <select id=\"raid_type\" class=\"raid_type\" name=\"raid_type\">\n" +
    "                        <option value=\"1\">Basic</option>\n" +
    "                        <option value=\"1\">RAID 1</option>\n" +
    "                        <option value=\"2\" selected=\"selected\">RAID 5</option>\n" +
    "                        <option value=\"3\">RAID 6</option>\n" +
    "                        <option value=\"4\">RAID 10</option>\n" +
    "                        <option value=\"4\">RAID 0</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"content_item input raid_max_content\">\n" +
    "                    <label for=\"raid_max\">RAID的最大硬盘输了限制:</label>\n" +
    "                    <select name=\"raid_max\" id=\"raid_max\" class=\"raid_max\">\n" +
    "                        <option value=\"0\">6</option>\n" +
    "                        <option value=\"1\" selected=\"selected\">12</option>\n" +
    "                        <option value=\"2\">24</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"content_item input min_max_code\">\n" +
    "                <label>各RAID阵列的最小、最大硬盘编号:</label>\n" +
    "                    <span>3/12</span>\n" +
    "                </div>\n" +
    "                <h6>选择硬盘</h6>\n" +
    "                <div class=\"select_disk\">\n" +
    "                    <ul></ul>\n" +
    "                    <ul></ul>\n" +
    "                </div>\n" +
    "                <div class=\"disk_check\">\n" +
    "                    <h6>硬盘检查</h6>\n" +
    "                <label>\n" +
    "                    <input class=\"disk_check_up_yes\" type=\"radio\" name=\"disk_check-radio\">\n" +
    "                    <span class=\"\">是</span>\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                    <input class=\"disk_check_up_no\" checked type=\"radio\" name=\"disk_check-radio\">\n" +
    "                    <span class=\"\">否</span>\n" +
    "                </label>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            </div>\n" +
    "            <div class=\"content_wrapper_foter\">\n" +
    "                <span class='yes'>应用</span>\n" +
    "                <span class='no'>取消</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>" +
    "    <!--创建存储空间-->\n" +
    "    <div class=\"add_storage bg_tips_box\" style=\"position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;\">\n" +
    "        <div class=\"tips_box file_windows\" style=\"width: 40%;height: auto;\">\n" +
    "            <div class=\"content_wrapper\">\n" +
    "                <form>\n" +
    "                    <h6 style=\"text-align: center;padding: 10px 0\">存储空间创建向导</h6>\n" +
    "                    <div class=\"content_item input\">\n" +
    "                        <label for=\"storage_desc\">描述:</label>\n" +
    "                        <input type=\"text\" value=\"RAID Group1\" name=\"storage_desc\" id=\"storage_desc\" />\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item input\">\n" +
    "                        <label for=\"raid_group\">RAID Group:</label>\n" +
    "                            <select id=\"raid_group\" class=\"raid_group\" name=\"raid_group\">\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item input file_system_content\">\n" +
    "                        <label for=\"file_system\">文件系统:</label>\n" +
    "                        <select name=\"file_system\" id=\"file_system\" class=\"file_system\">\n" +
    "                            <option value=\"0\">btrfs</option>\n" +
    "                            <option value=\"1\">ext4</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                    <h6 style=\"text-align: center;padding: 10px 0;\">有关选择文件系统的更多信息</h6>\n" +
    "                    <div class=\"content_item input min_max_code\">\n" +
    "                        <label>可分配大小的上限(GB):</label>\n" +
    "                        <span>未知</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"content_item input min_max_code\">\n" +
    "                        <label>配额容量(GB):</label>\n" +
    "                        <input type=\"text\" value=\"\" id=\"storage_capacity\"/>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"content_wrapper_foter\">\n" +
    "                <span class='yes'>应用</span>\n" +
    "                <span class='no'>取消</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>" +
    "       <!--删除窗口raid/存储空间-->\n" +
    "       <div class=\"disk_delet_storage bg_tips_box\" style=\"position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;\">\n" +
    "            <div class=\"tips_box file_windows\" style=\"width: 30%;height: auto;\">\n" +
    "                 <div class=\"content_wrapper\">\n" +
    "                     <form>\n" +
    "                        <h6 style=\"text-align: center;padding: 20px 0\">是否要删除<span></span>？</h6>\n" +
    "                     </form>\n" +
    "                 </div>\n" +
    "                 <div class=\"content_wrapper_foter\">\n" +
    "                      <span class='yes' style=\"background: #ffc107;border: none;\">删除</span>\n" +
    "                      <span class='no'>取消</span>\n" +
    "                 </div>\n" +
    "           </div>\n" +
    "       </div>"+
    "    </div>",
};