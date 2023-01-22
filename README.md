## このリポジトリについて

Drupal で TailwindCSS を用いたテーマ開発が行えます。

## Drupal 構築
1. ローカルにリポジトリのクローンを作成
```bash
git clone https://github.com/t-nakai10/drupal-tailwindcss.git
cd drupal-tailwindcss
```
2. DDEV 起動
```bash
ddev start
```
3. パッケージをインストール
```bash
ddev composer install
```
4. https://drupal-project.ddev.site に遷移し Drupal をインストールします。
5. Drupal のインストールが終われば、テーマから `tw` テーマを有効化してください。

## gulp の設定
1. パッケージをインストール
```bash
ddev exec yarn
```
2. gulp 実行.
```bash
ddev exec gulp
```

- プロキシのURLは https://drupal-project.ddev.site:3000/ になります。

## キャッシュの無効化

### settings.local.php
- `app/sites/example.settings.local.php` を `app/sites/default/settings.local.php` にリネーム
- `$settings['cache']['bins']...` のすべてのコメントアウトを解除

### services.local.yml

- `app/sites/default/default.services.yml` を `app/sites/default/services.local.yml` にリネーム
- 以下のように編集してください。
```yml
# parametaers > twig.confg の各設定を変更
parameters:
  twig.config:
    debug: true
    auto_reload: true
    cache: false
```
- 詳しくは https://www.studio-umi.jp/blog/6/345 が参考になると思います。

## 主に使用するコマンド
- キャッシュクリア
```bash
ddev drush cr
```

- DDEV を実行

```bash
ddev start
```

- gulp を実行

```bash
ddev exec gulp
```

- web ディレクトリ再生成

  - drupal paranoia を使用しているため必要に応じて下記コマンドを実行してください。

```bash
ddev composer drupal:paranoia
```

## 補足

- https://github.com/studioumi/drupal-project のリポジトリをベースに変更を加えました。
- Docker や DDEV のインストールがまだの方は https://ddev.readthedocs.io/en/stable/#manual から準備してください。
