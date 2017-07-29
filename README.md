# Rate

一个五星评分组件，要用的话直接复制Rate.jsx这个文件到你的项目内，然后import一下。 <br/>
clone下来之后npm install或者yarn，完成之后，npm run dev可以看效果。


文档如下：

属性	                       说明	                                 类型	                           默认值 <br/>
disabled	             只读，无法进行交互	                            boolean	                         false <br/>
character	             自定义字符（不支持emoji）                       text	                                 ★ <br/>
count	                     star总数	                                  number	                        5 <br/>
defaultValue	             默认值	                                 number	                               5
onChange	             选择时的回调	                              Function(number)	                            -
