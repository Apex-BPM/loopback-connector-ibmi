// Copyright IBM Corp. 2017,2019. All Rights Reserved.
// Node module: loopback-connector-ibmi
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

const path = require('path');
const SG = require('strong-globalize');

SG.SetRootDir(path.join(__dirname, '..'), { autonomousMsgLoading: 'all' });
module.exports = SG();
