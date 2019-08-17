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

// 本体情報(DB)
const realmPreference = () => {
    const realm = new Realm({
        schema: [timerSchema] // スキーマを設定
    });

    if (realm.objects("timer").length == 0) {
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
export const getTitle = (id) => {
    const realm = realmPreference();
    const target = realm.objects("timer").filtered("id = " + id);
    return obj.title;
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

// タイマーのデータ全件削除
export const delAllTimers = () => {
    const realm = realmPreference();
    realm.write(() => {
        const allTimers = realm.objects('timer');
        realm.delete(allTimers);
    });
}

export const countUp = (id) => {
    const realm = realmPreference();
    realm.write(() => {
        const target = realm.objects("timer").filtered("id = " + id);
        target[0].count = target[0].count + 1;
    });
}

export const countDown = (id) => {
    const realm = realmPreference();
    realm.write(() => {
        const target = realm.objects("timer").filtered("id = " + id);
        target[0].count = target[0].count - 1;
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