import Realm from 'realm';

// 各タイマーのデータ
const timerSchema = {
    name: 'timer',
    primaryKey: 'id', // プライマリキーを指定
    properties: {
        id: 'int', // プライマリキーとして扱う (int型)
        title: 'string', // 任意のプロパティ (string型)
        count: 'int',
    }
}

// 全タイマーのデータ
const timerTableSchema = {
    name: "table",
    primaryKey: 'id', // プライマリキーを指定
    properties: {
        id: 'int', // プライマリキーとして扱う (int型)
        timers: {type: 'list', objectType: 'timer'},
        title: 'string',
    }
};

// 本体情報(DB)
const realmPreference = () => {
    const realm = new Realm({
        schema: [timerTableSchema,timerSchema] // スキーマを設定
    });

    if (realm.objects("table").length == 0) {
        // 初回はデータがないのでレコードを1つ作る
        realm.write(() => {
            realm.create(
                'timer', {
                    id: 0, // プライマリキーとして扱う (int型)
                    title: 'test', // 任意のプロパティ (string型)
                    count: 0,
                }, true);
        });
    }
    return realm;
};
export const getTimers = () => {
    const realm = realmPreference();
    const timers = realm.objects("timer");
    return timers;
};


// titleプロパティの値を取得
export const getTitle = () => {
    const realm = realmPreference();
    const obj = realm.objects("timer").filtered("id = 0");
    return obj[0].title;
};

export const addTimer = () => {
    const realm = realmPreference();
    const index = realm.objects("timer").max("id");
    realm.write(() => {
        realm.create(
            'timer', {
                id: index + 1, // プライマリキーとして扱う (int型)
                title: 'hob', // 任意のプロパティ (string型)
                count: 0,
            },
        true);
    });
}

// titleプロパティに値をセット
export const setTitle = (item) => {
    // 型の確認
    if (typeof item !== 'string') {
        return;
    }
    const realm = realmPreference();
    // id = 0 のレコードをアップデート
    realm.write(() => {
        realm.create(timerSchema, {
            id: 0,
            title: item,
            count: 0,
        }, true);
    });
};