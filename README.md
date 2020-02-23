# Lambda tauri

[![licence mit](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://hemersonvianna.mit-license.org/)
[![GitHub issues](https://img.shields.io/github/issues/org-3s2yu/lambda-tauri.svg)](https://github.com/org-3s2yu/lambda-tauri/issues)
![GitHub package.json version](https://img.shields.io/github/package-json/v/org-3s2yu/lambda-tauri.svg)
![GitHub Release Date](https://img.shields.io/github/release-date/org-3s2yu/lambda-tauri.svg)
![GitHub top language](https://img.shields.io/github/languages/top/org-3s2yu/lambda-tauri.svg)
![GitHub repo size](https://img.shields.io/github/repo-size/org-3s2yu/lambda-tauri.svg)
![GitHub All Releases](https://img.shields.io/github/downloads/org-3s2yu/lambda-tauri/total.svg)

## Generate Keystores

```
keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

## Store Passwords in Keychain Access

```
// android/app/build.gradle

// https://www.microcenter.com/tech_center/article/6819/how-to-open-keychain-access-in-mac-os-x
def getPassword(String currentUser, String keyChain) {
  def stdout = new ByteArrayOutputStream()
  def stderr = new ByteArrayOutputStream()
  exec {
      commandLine 'security', '-q', 'find-generic-password', '-a', currentUser, '-s', keyChain, '-w'
      standardOutput = stdout
      errorOutput = stderr
      ignoreExitValue true
  }
  //noinspection GroovyAssignabilityCheck
    stdout.toString().trim()
}

def pass = getPassword("hemersonvianna","android_keystore")

signingConfigs {
  release {
    if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
      storeFile file(MYAPP_UPLOAD_STORE_FILE)
      storePassword pass
      keyAlias MYAPP_UPLOAD_KEY_ALIAS
      keyPassword pass
    }
  }
  ...
}
```

## Generate a set of APKs from your app package

```
// download
https://github.com/google/bundletool/releases
// or
brew install bundletool

bundletool build-apks --bundle=/MyApp/my_app.aab --output=/MyApp/my_app.apks
  --ks=/MyApp/keystore.jks
  --ks-pass=file:/MyApp/keystore.pwd
  --ks-key-alias=MyKeyAlias
  --key-pass=file:/MyApp/key.pwd
```

## Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -m 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

## Log

Check [Releases](https://github.com/org-3s2yu/lambda-tauri/releases) for detailed changelog.

## License

[MIT license](http://hemersonvianna.mit-license.org/) © Hemerson Vianna
