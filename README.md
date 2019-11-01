# 魔镜

![](C:\Users\Administrator\Desktop\MagicMirror.png)

主要功能：

- 日期
- 天气
- 新闻
- 生日提醒
- 问候语

测试：
- 树莓派B+

## 依赖
- Apache
- PHP

## 配置说明

在config.js文件中修改：

<table width="100%">
	<thead>
		<tr>
			<th>选项</th>
			<th width="100%">描述</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>weather</code></td>
			<td>选用的是和风天气API，所以需要去官网申请一个key
				<br><b>params location:</b> <code>地址</code> - <code>string</code>
				<br><b>params key:</b> <code>key</code> - <code>string</code>
			</td>
		</tr>
		<tr>
			<td><code>weather</code></td>
			<td>问候语的相关配置，可以直接在函数里更改显示的问候语内容
				<br><b>interval:</b> <code>刷新时间</code> - <code>number</code>
				<br><b>fadeInterval:</b> <code>隐藏时间</code> - <code>number</code>
				<br><b>morning:</b> <code>早晨问候语</code> - <code>array</code>
				<br><b>afternoon:</b> <code>中午问候语</code> - <code>array</code>
				<br><b>evening:</b> <code>晚上问候语</code> - <code>array</code>
			</td>
		</tr>
		<tr>
			<td><code>calendar</code></td>
			<td>日历相关配置
				<br><b>birthdays:</b> <code>生日提醒</code> - <code>array</code>
			</td>
		</tr>
	</tbody>
</table>

