# ChatSpaceDB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :posts
- has_many :comments

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|text|text|null: false|
|phot|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :comments
- has_many :posts_tags
- has_many  :tags,  through:  :posts_tags

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|integer|null: false, foreign_key: true|
|chat_member|integer|null: false, foreign_key: true|
|chat_member_name|integer|null: false, foreign_key: true|
### Association
- belongs_to :
- belongs_to :

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user