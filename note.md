# React Native - Start

## reference 
[React Native.cn 教學文件](https://reactnative.cn/docs/0.51/getting-started.html)

手把手安裝好就差不多了！
ubuntu(linux) + android

## 沒有安裝成功的
watchman
gradle

## running steps

以下皆可在**專案資料夾**底下執行

- 進入管理者模式
```
sudo -i
```

- 開啟genymotion
- 開啟模擬器

- 跑以下指令
```
sudo react-native run-android
```

- 以網址在瀏覽器開啟debugger
http://localhost:8081/debugger-ui/

- 跑以下指令
- 原本的指令
```
sudo react-native start
```

- 無法開的話用這個
```
react-native start --port=8088
```

- 以超級使用者開啟vscode
```
sudo code --user-data-dir="~/.vscode-root"
```

## problems you may face

### stuck in 59%
fixed it by installing the libraries

```
sudo apt-get install lib32z1
sudo apt-get install zlib1g:i386
```

[reference](https://github.com/facebook/react-native/issues/17753)

### 無法連上chrome debugger的解決辦法

if terminal shows
```
ERROR Metro Bundler can't listen on port 8081
Loading dependency graph...
```

then you should
在專案資料夾下以下指令
指定另一個port 8088
```
ruby@ruby-ubuntu:~/Leslie$ react-native start --port=8088
```

