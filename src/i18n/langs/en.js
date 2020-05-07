import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
  message: {
    'hello': 'hello, world',
    'login': 'Login'
  },
  header: {
    'language': 'English',
    'help': 'help',
    'Documents': 'Documents',
    'CommercialSupport': 'Commercial Support'
  },
  route: {
    'dashboard': 'Dashboard',
    'users': 'Users',
    'userList': 'User List',
    'usergroup': 'User Group',
    'assets': 'Assets',
    'applications': 'Applications',
    'perms': 'Perms',
    'Sessions': 'Sessions',
    'SessionOnline': 'Session Online',
    'SessionOffline': 'Session Offline',
    'SessionDetail': 'Session Detail',
    'Goto': 'Goto',
    'jobcenter': 'Job Center',
    'Terminal': 'Terminal',
    'CreateReplayStorage': 'Create replay storage',
    'ReplayStorageUpdate': 'Update replay storage',
    'CreateCommandStorage': 'Create command storage',
    'CommandStorageUpdate': 'Update command storage'
  },
  users: {
    'createuser': 'Cerate User',
    'updateuser': 'Update User',
    'user_detail': 'User Detail',
    'name': 'Name',
    'username': 'Username',
    'email': 'Email',
    'usergroup': 'User Group',
    'role': 'Role',
    'MFAcertification': 'MFA certification',
    'source': 'Source',
    'validity': 'Validity',
    'action': 'Action',
    'update': 'Update',
    'delete': 'Delete',
    'search': 'Search',
    'create_by': 'Create by',
    'date_expired': 'Date expired',
    'date_joined': 'Date joined',
    'last_login': 'Last login',
    'last_password_updated': 'Last password updated',
    'usergrouplist': 'User Group List',
    'createusergroup': 'Create User Group',
    'comment': 'comment',
    'user': 'User',
    'admin': 'Admin',
    'auditor': 'Auditor',
    'off': 'OFF',
    'on': 'ON',
    'local': 'Local',
    'disable': 'Disable',
    'enable': 'Enable',
    'force_enable': 'Force enable',
    'quick_modify': 'Quick modify',
    'active': 'Active',
    'force_enabled_mfa': 'Force enabled MFA',
    'reset_maf': 'Reset MFA',
    'reset': 'Reset',
    'send_reset_password_mail': 'Send reset password mail',
    'send_reset_ssh_key_mail': 'Send reset ssh key mail',
    'send': 'Send',
    'user_group': 'User Group',
    'join_user_groups': 'Join user groups',
    'join': 'Join',
    'login_confirm': 'Login confirm',
    'reviewers': 'Reviewers',
    'confirm': 'Confirm',
    'user_permissions': 'User permissions',
    'asset_granted': 'Asset granted',
    'asset_permission': 'Asset permission',
    'remote_app_granted': 'RemoteApp granted',
    'remote_app_permission': 'RemoteApp permission',
    'database_app_granted': 'DatabaseApp granted',
    'database_app_permission': 'DatabaseApp permission'
  },
  usergroup: {
    'user_group_list': 'User group list',
    'user_group_detail': 'User group detail',
    'create_user_group': 'Create user group',
    'update_user_group': 'Update user group',
    'name': 'Name',
    'user': 'User',
    'comment': 'Comment',
    'action': 'Action',
    'update': 'Update',
    'delete': 'Delete',
    'created_by': 'Create by',
    'date_created': 'Date created',
    'asset_granted': 'Asset Granted',
    'add_user': 'Add user',
    'add': 'Add'
  },
  assets: {
    'asset_list': 'Asset list',
    'asset_detail': 'Asset detail',
    'create_asset': 'Create asset',
    'update_asset': 'Update asset',
    'hostname': 'Hostname',
    'ip': 'IP',
    'hardware': 'Hardware',
    'reachable': 'Reachable',
    'action': 'Action',
    'update': 'Update',
    'delete': 'Delete',
    'search': 'Search',
    'delete_selected': 'Delete selected',
    'update_selected': 'Update selected',
    'remove_from_this_node': 'Remove from this node',
    'deactive_selected': 'Deactive selected',
    'active_selected': 'Active selected',
    'submit': 'Submit',
    'platform': 'Platform',
    'public_ip': 'Public Ip',
    'domain': 'Domain',
    'admin_user': 'Admin user',
    'node': 'Node',
    'label': 'Label',
    'comment': 'Comment',
    'basic': 'Basic',
    'protocols': 'Protocols',
    'auth': 'Auth',
    'labels': 'Labels',
    'other': 'Other',
    'vendor': 'Vendor',
    'model': 'Model',
    'cpu': 'CPU',
    'memory': 'Memory',
    'disk': 'Disk',
    'os': 'OS',
    'is_active': 'Is active',
    'serial_number': 'Serial number',
    'asset_number': 'Asset number',
    'created_by': 'Created by',
    'date_joined': 'Date joined',
    'quick_modify': 'Quick modify',
    'active': 'Active',
    'refresh_hardware': 'Refresh hardware',
    'test_connective': 'Test connective',
    'refresh': 'Refresh',
    'test': 'Test',
    'confirm': 'Confirm',
    'asset_user_list': 'Asset user list',
    // 网域
    'domain_list': 'Domain list',
    'domain_detail': 'Domain detail',
    'create_domain': 'Create domain',
    'update_domain': 'Update domain',
    'name': 'Name',
    'asset': 'Asset',
    'gateway': 'Gateway',
    'date_created': 'Date created',
    // 管理用户
    'admin_user_list': 'Admin user list',
    'admin_user_detail': 'Admin user detail',
    'create_admin_user': 'Create admin user',
    'update_admin_user': 'Update admin user',
    'username': 'Username',
    'replace_node_assets_admin_user_with_this': 'Replace node assets admin user with this',
    'select_nodes': 'Select nodes',
    // 系统用户
    'system_user_list': 'System user list',
    'create_system_user': 'Create system user',
    'update_system_user': 'Update system user',
    'system_user_detail': 'System user detail',
    'protocol': 'Protocol',
    'login_mode': 'Login mode',
    'quick_update': 'Quick update',
    'auto_push': 'Auto push',
    // 标签
    'label_list': 'Label list',
    'label_detail': 'Label detail',
    'create_label': 'Create label',
    'update_label': 'Update label',
    'value': 'Value',
    // 命令过滤
    'command_filter_list': 'Command filter list',
    'create_command_filter': 'Create command filter',
    'update_command_filter': 'Update command filter',
    'command_filter_detail': 'command filter detail',
    'rules': 'rules',
    'system_user': 'System user',
    'date_updated': 'Date updated',
    'binding_to_system_user': 'Binding to system user',
    // 系统平台
    'platform_list': 'Platform list',
    'create_platform': 'Create platform',
    'update_platform': 'Update platform',
    'platform_detail': 'Platform detail',
    'base_platform': 'Base platform',
    'charset': 'Charset',
    'meta': 'Meta'
  },
  applications: {
    'applications': 'Applications',
    'remote_app_list': 'RemoteApp list',
    'create_remote_app': 'Create RemoteApp',
    'remote_app_detail': 'RemoteApp detail',
    'update_remote_app': 'Update RemoteApp',
    'name': 'Name',
    'app_type': 'App type',
    'action': 'Action',
    'update': 'Update',
    'delete': 'Detele',
    'comment': 'Comment',
    'database_app_list': 'DatabaseApp list',
    'database_app_detail': 'DatabaseApp detail',
    'create_database_app': 'Create DatabaseApp',
    'update_database_app': 'Update DatabaseApp',
    'type': 'Type',
    'host': 'Host',
    'port': 'Port',
    'database': 'Database',
    'search': 'Search',
    'date_created': 'Date created',
    'created_by': 'Created by',
    'app_path': 'App path'
  },
  perms: {
    'asset_permission': 'Asset permission',
    'asset_permission_list': 'Asset permission list',
    'asset_permission_detail': 'Asset permission detail',
    'create_asset_permission': 'Create asset permission',
    'update_asset_permission': 'Update asset permission',
    'name': 'Name',
    'user': 'User',
    'user_group': 'User group',
    'asset': 'Asset',
    'node': 'Node',
    'system_user': 'System user',
    'validity': 'Validity',
    'action': 'Action',
    'update': 'Update',
    'delete': 'Detele',
    'search': 'Search',
    'user_count': 'User count',
    'user_group_count': 'User group count',
    'asset_count': 'Asset count',
    'node_count': 'Node count',
    'system_user_count': 'System user count',
    'date_start': 'Date start',
    'dateexpired': 'Date expired',
    'date_created': 'Date created',
    'created_by': 'Created by',
    'comment': 'Comment',
    'quick_update': 'Quick update',
    'active': 'Active',
    'users_and_user_groups': 'Users and user groups',
    'assets_and_node': 'Assets and node',
    //
    'remote_app': 'RemoteApp',
    'remote_app_permission_list': ' RemoteApp permission list',
    'remote_app_permission_detail': 'RemoteApp permission detail',
    'create_remote_app_permission': 'Create RemoteApp permission',
    'update_remote_app_permission': 'Update RemoteApp permission',
    'remote_app_count': 'RemoteApp count',
    //
    'database_app': 'DatabaseApp',
    'database_app_permission_list': 'DatabaseApp permission list',
    'database_app_permission_detail': 'DatabaseApp permission detail',
    'create_database_app_permission': 'Create DatabaseApp permission',
    'update_database_app_permission': 'Update DatabaseApp permission',
    'database_app_count': 'DatabaseApp count'
  },
  sessions: {
    'id': '',
    'user': 'Use',
    'asset': 'Asset',
    'systemUser': 'System user',
    'remoteAddr': 'Remote addr',
    'protocol': 'Protocol',
    'loginFrom': 'Login from',
    'command': 'Command',
    'dateStart': 'Date start',
    'duration': 'Duration',
    'terminate': 'Terminate',
    'dateEnd': 'Date end',
    'commands': 'Commands',
    'replay': 'replay',
    'download': 'download',
    'riskLevel': 'Risk level',
    'session': 'session',
    'action': 'Action',
    'search': 'Search',
    'terminate_selected': 'Terminate selected',
    'confirm_finished': 'Confirm finished',
    'submit': 'Submit',
    'command_list': 'Command list',
    'quick_modify': 'Quick modify',
    'terminate_session': 'Terminate session',
    'confirm': 'Confirm',
    'join': 'join',
    'goto': 'Goto',
    'sessionDetail': 'Session Detail',
    'quickModify': 'Quick Modify',
    'replaySession': 'Replay session:',
    'downloadReplay': 'Download replay:',
    'go': 'Go',
    'terminalDetail': 'terminalDetail',
    'name': 'Name:',
    'sshPort': 'SSH port:',
    'httpPort': 'Http port:',
    'comment': 'Comment:',
    'dateCreated': 'Date created:',
    'createCommand': 'Create command storage',
    'createReplay': 'Create replay storage',
    'commandStorage': 'Command storage',
    'replayStorage': 'Replay Storage',
    'storage': 'Storage',
    'test': 'Test',
    'createReplayStorage': 'Create replay storage',
    'endPoint': 'Endpoint',
    'bucket': 'Bucket',
    'type': 'Type',
    'containerName': 'Container name',
    'accountName': 'Account name',
    'accountKey': 'Account key',
    'endpointSuffix': 'Endpoint suffix',
    'docType': 'Doc type',
    'index': 'Index',
    'hosts': 'Hosts'
  },
  setting: {
    'setting': 'System Setting',
    'Basic': 'Basic setting',
    'Email': 'Email setting',
    'EmailContent': 'Email content setting',
    'Ldap': 'LDAP setting',
    'Terminal': 'Terminal setting',
    'Security': 'Security setting',
    'createUserSetting': 'Create User setting',
    'basicSetting': 'Basic setting',
    'SecuritySetting': 'Security setting',
    'PasswordCheckRule': 'Password check rule',
    'siteUrl': 'Current SITE URL',
    'userGuideUrl': 'User Guide URL',
    'emailSubjectPrefix': 'Email Subject Prefix',
    'emailHost': 'SMTP host',
    'emailPort': 'SMTP port',
    'emailHostUser': 'SMTP user',
    'emailHostPassword': 'SMTP password',
    'emailEmailFrom': 'Send user',
    'emailRecipient': 'Test recipient',
    'emailUserSSL': 'Use SSL',
    'emailUserTLS': 'Use TLS',
    'emailCustomUserCreatedSubject': 'Create user email subject',
    'emailCustomUserCreatedHonorific': 'Create user honorific',
    'emailCustomUserCreatedBody': 'Create user email content',
    'emailCustomUserCreatedSignature': 'Signature',
    'authLdapServerUri': 'LDAP server',
    'authLdapBindDn': 'Bind DN',
    'authLdapBindPassword': 'Password',
    'authLdapSearchOu': 'User OU',
    'authLdapSearchFilter': 'User search filter',
    'authLdapUserAttrMap': 'User attr map',
    'authLdap': 'Enable LDAP auth',
    'terminalPasswordAuth': 'Password auth',
    'terminalPublicKeyAuth': 'Public key auth',
    'terminalHeartbeatInterval': 'Heartbeat interval',
    'terminalAssetListSortBy': 'List sort by',
    'terminalAssetListPageSize': 'List page size',
    'terminalSessionKeepDuration': 'Session keep duration',
    'terminalTelnetRegex': 'Telnet login regex',
    'securityMfaAuth': 'MFA',
    'securityCommandExecution': 'Batch execute commands',
    'securityServiceAccountRegistration': 'Service account registration',
    'securityLoginLimitCount': 'Limit the number of login failures',
    'securityLoginLimitTime': 'No logon interval',
    'securityMaxIdleTime': 'Connection max idle time',
    'securityPasswordExpirationTime': 'Password expiration time',
    'securityPasswordMinLength': 'Password minimum length',
    'securityPasswordUpperCase': 'Must contain capital letters',
    'securityPasswordLowerCase': 'Must contain lowercase letters',
    'securityPasswordNumber': 'Must contain numeric characters',
    'securityPasswordSpecialChar': 'Must contain special characters',
    'Hostname': 'Hostname',
    'emailTest': 'Test connection',
    helpText: {
      'siteUrl': 'eg: http://jumpserver.abc.com:8080',
      'userGuideUrl': 'User first login update profile done redirect to it',
      'emailSubjectPrefix': 'Tips: Some word will be intercept by mail provider',
      'emailHostPassword': 'Tips: Some provider use token except password',
      'emailEmailFrom': 'Tips: Send mail account, default SMTP account as the send account',
      'emailRecipient': 'Tips: Used only as a test mail recipient',
      'emailCustomUserCreatedSubject': 'Tips: When creating a user, send the subject of the email (eg:Create account successfully)',
      'emailCustomUserCreatedHonorific': 'Tips: When creating a user, send the honorific of the email (eg:Hello)',
      'emailCustomUserCreatedBody': 'Tips:When creating a user, send the content of the email',
      'emailCustomUserCreatedSignature': 'Tips: Email signature (eg:jumpserver)',
      'authLdapSearchOu': 'Use | split User OUs',
      'authLdapSearchFilter': 'Choice may be (cn|uid|sAMAccountName)=%(user)s)',
      'authLdapUserAttrMap': 'User attr map present how to map LDAP user attr to jumpserver, username,name,email is jumpserver attr',
      'terminalHeartbeatInterval': 'Units: seconds',
      'terminalSessionKeepDuration': 'Units: days, Session, record, command will be delete if more than duration, only in database',
      'terminalTelnetRegex': 'ex: Last\\s*login|success|成功',
      'securityLoginLimitTime': 'Tip: (unit/minute) if the user has failed to log in for a limited number of times, no login is allowed during this time interval.',
      'securityMaxIdleTime': 'If idle time more than it, disconnect connection Unit: minute',
      'securityPasswordExpirationTime': 'Tip: (unit: day) If the user does not update the password during the time, ' +
        'the user password will expire failure;The password expiration reminder' +
        ' mail will be automatic sent to the user by system within 5 days (daily) before the password expires'
    },
    helpTip: {
      'emailUserSSL': 'If SMTP port is 465, may be select',
      'emailUserTLS': 'If SMTP port is 587, may be select',
      'securityMfaAuth': 'After opening, all user login must use MFA(valid for all users, including administrators)',
      'securityCommandExecution': 'Allow user batch execute commands',
      'securityServiceAccountRegistration': 'Allow using bootstrap token register service account, when terminal setup, can disable it',
      'securityPasswordUpperCase': '开启后，用户密码修改、重置必须包含大写字母',
      'securityPasswordLowerCase': '开启后，用户密码修改、重置必须包含小写字母',
      'securityPasswordNumber': '开启后，用户密码修改、重置必须包含数字字符',
      'securityPasswordSpecialChar': '开启后，用户密码修改、重置必须包含特殊字符'
    }
  },
  audits: {
    'username': 'Username',
    'type': 'Type',
    'ip': 'IP',
    'city': 'City',
    'user_agent': 'UA',
    'mfa': 'MFA',
    'reason': 'Reason',
    'status': 'Status',
    'datetime': 'Date'
  },
  ...enLocale
}

export default en
