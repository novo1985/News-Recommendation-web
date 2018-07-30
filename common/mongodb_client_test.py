import mongodb_client as client

def test_basic():
    db = client.get_db('test')
    db.test.drop()
    assert db.test.count() == 0

    db.test.insert({'test' : 1})
    assert db.test.count() == 1

    db.test.insert({'test2' : 2})
    assert db.test.count() == 2

    db.test.insert({'test3' : 3})
    assert db.test.count() == 3

    db.test.insert({'test4' : 4})
    assert db.test.count() == 4
    #db.test.drop()
    #assert db.test.count() == 0
    print('test_basic passed!')

if __name__ == '__main__':
    test_basic()
